// Direct Milvus Standalone client (official Node SDK, gRPC :19530), behaviour-aligned with
// the Python original (~/Downloads/python app/kb/milvus_client.py): the collection carries
// BOTH vector paths — dense (COSINE) and a native BM25 full-text path where the `text` field
// (analyzer-enabled) feeds a BM25 Function that populates the `sparse` field. BM25 search and
// dense+BM25 hybrid search (RRF fusion) therefore run inside Milvus, not in-process; the
// in-process BM25/RRF in store.ts only serves the legacy mode where MILVUS_URI is empty.
// Milvus Standalone replaces the old Milvus Lite deployment that needed a Python gRPC bridge;
// the Node server now talks to Milvus directly, so there is no bridge process.
//
// Semantics preserved from the bridge: the collection is created lazily on the first upsert
// with the dimension inferred from that embedding (model-agnostic, never hardcoded), a
// missing collection reads as empty (search -> [], count -> 0), and every failure throws so
// store.ts surfaces a down Milvus instead of silently degrading.
import {
  DataType,
  ErrorCode,
  FunctionType,
  MilvusClient,
  RANKER_TYPE,
  type HybridSearchReq,
  type ResStatus,
  type SearchSimpleReq,
  type SearchResultData,
} from "@zilliz/milvus2-sdk-node";

import { settings } from "#/config.ts";

const COLLECTION = settings.milvusCollection;
const TIMEOUT_MS = 15_000;
// Milvus 3.x only returns the primary key when it is listed explicitly (2.x injected it into
// every hit automatically, which is what the Python original relies on), so "id" rides along.
const OUTPUT_FIELDS = [
  "id",
  "question",
  "answer",
  "section_path",
  "content_type",
  "category",
];
// RRF smoothing constant; matches the Python original's RRFRanker() default (k=60) and the
// legacy in-process fusion in store.ts.
const RRF_K = 60;

// A chunk row upserted into Milvus. `dense` and `sparse` are the two indexed vector paths:
// `dense` is supplied by the caller, while `sparse` is derived server-side by the BM25
// Function from `text` (category + questions + answer — the same string that gets embedded),
// so upserts never set it. The scalars are carried so searches return full hits without a
// SQLite join.
export interface MilvusRow {
  id: number;
  dense: number[];
  text: string;
  question: string;
  answer: string;
  section_path: string;
  content_type: string;
  category: string;
}

// A search hit. Structurally assignable to store.ts's KnowledgeHit (rerank_score is optional
// there and set later by the rerank step). `score` is the Milvus distance: COSINE similarity
// for dense, BM25 relevance for sparse, fused RRF value for hybrid — higher is always better.
export interface MilvusHit {
  id: number;
  score: number;
  question: string;
  answer: string;
  section_path: string;
  content_type: string;
  category: string;
}

export function milvusEnabled(): boolean {
  return settings.milvusUri !== "";
}

// --- connection (lazy singleton) ---
let cachedClient: MilvusClient | null = null;
// True once the collection has been loaded into memory in this process; reset by drop().
let ready = false;
// True once the collection schema has been verified to carry the BM25 fields in this process.
let schemaChecked = false;

function connect(): MilvusClient {
  if (cachedClient !== null) {
    return cachedClient;
  }
  const address = settings.milvusUri.replace(/^https?:\/\//, "");
  const config: ConstructorParameters<typeof MilvusClient>[0] = {
    address,
    timeout: TIMEOUT_MS,
    // The app logs through pino; keep the SDK's own winston output out of the way.
    logLevel: "warn",
  };
  if (settings.milvusToken !== "") {
    config.token = settings.milvusToken;
  }
  cachedClient = new MilvusClient(config);
  // The SDK fires a background Connect RPC during construction and stores it on
  // connectPromise. When Milvus is down that promise rejects with no handler attached,
  // which Node treats as fatal (unhandled rejection) — it would crash the server instead of
  // letting milvusState() report "offline". Awaited calls surface the same error through
  // their own promises, so swallowing the background copy is safe.
  cachedClient.connectPromise.catch(() => undefined);
  return cachedClient;
}

// Close the underlying gRPC connections (scripts/smoke use this to let the process exit).
export async function close(): Promise<void> {
  if (cachedClient !== null) {
    await cachedClient.closeConnection();
    cachedClient = null;
    ready = false;
    schemaChecked = false;
  }
}

// The SDK reports logical failures in-band; anything not Success must throw so callers
// never mistake an error response for an empty result. Some calls answer with a bare
// ResStatus, others wrap it in { status }.
function isSuccess(res: ResStatus | { status: ResStatus }): boolean {
  const status = "status" in res ? res.status : res;
  const code = status.error_code;
  return code === ErrorCode.SUCCESS || code === 0 || code === "0";
}

function checkStatus(res: ResStatus | { status: ResStatus }, op: string): void {
  if (!isSuccess(res)) {
    const status = "status" in res ? res.status : res;
    throw new Error(
      `milvus ${op} failed: ${status.reason || String(status.error_code)}`,
    );
  }
}

// Milvus boolean-expr string literal; category values come from the KB but are escaped
// anyway so a quote can never break out of the filter.
function quote(value: string): string {
  return `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

function toHits(results: SearchResultData[]): MilvusHit[] {
  return results.map((hit) => ({
    id: Number(hit.id),
    score: hit.score,
    question: String(hit.question ?? ""),
    answer: String(hit.answer ?? ""),
    section_path: String(hit.section_path ?? ""),
    content_type: String(hit.content_type ?? ""),
    category: String(hit.category ?? ""),
  }));
}

async function hasCollection(): Promise<boolean> {
  const res = await connect().hasCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "hasCollection");
  return Boolean(res.value);
}

// Collections created before the BM25 alignment only had the dense path; a sparse search
// against them fails with a confusing server-side error. Detect that shape once per process
// and demand an explicit rebuild instead — the rows are re-derivable from SQLite, and the
// Python original also rebuilt its collection when the schema changed (Lite -> Standalone).
async function assertBm25Schema(): Promise<void> {
  if (schemaChecked) {
    return;
  }
  const res = await connect().describeCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "describeCollection");
  const names = new Set(res.schema.fields.map((field) => field.name));
  if (!names.has("text") || !names.has("sparse")) {
    throw new Error(
      `milvus collection ${COLLECTION} predates the BM25 alignment (missing text/sparse fields); ` +
        "rebuild it: node main.js kb-reset && node main.js kb-build && node main.js kb-vectorize",
    );
  }
  schemaChecked = true;
}

// Load the collection into memory (idempotent server-side; the `ready` flag skips the
// redundant round-trip within this process).
async function loadCollection(): Promise<void> {
  if (ready) {
    return;
  }
  const loaded = await connect().loadCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  checkStatus(loaded, "loadCollection");
  ready = true;
}

// Idempotent create with a model-agnostic dimension inferred from the first upserted
// embedding (the embedding model is configurable upstream). Strong consistency keeps the
// dual-write check (SQLite done-count === Milvus count) and post-vectorize reads
// deterministic, matching the always-consistent Milvus Lite behaviour this replaces.
//
// The old Python bridge serialized every operation through one thread; direct SDK calls
// can instead race across processes (server + a vectorize job), so create/createIndex
// failures are tolerated when the collection ends up usable anyway.
async function ensureCollection(dim: number): Promise<void> {
  const client = connect();
  if (await hasCollection()) {
    await assertBm25Schema();
    await loadCollection();
    return;
  }
  const created = await client.createCollection({
    collection_name: COLLECTION,
    consistency_level: "Strong",
    fields: [
      {
        name: "id",
        data_type: DataType.Int64,
        is_primary_key: true,
        autoID: false,
      },
      { name: "dense", data_type: DataType.FloatVector, dim },
      // BM25 Function input: category + questions + answer concatenated, always longer than
      // answer alone, so 16384 (vs answer's 8192) keeps long chunks from overflowing it.
      // The analyzer matches the corpus language: the Python original used the "chinese"
      // analyzer for its Chinese KB; this KB is English, so "standard" plays the same role.
      {
        name: "text",
        data_type: DataType.VarChar,
        max_length: 16384,
        enable_analyzer: true,
        analyzer_params: { type: "standard" },
      },
      // BM25 Function output: derived from `text` server-side, never written by upserts.
      {
        name: "sparse",
        data_type: DataType.SparseFloatVector,
        is_function_output: true,
      },
      { name: "question", data_type: DataType.VarChar, max_length: 2048 },
      { name: "answer", data_type: DataType.VarChar, max_length: 8192 },
      { name: "section_path", data_type: DataType.VarChar, max_length: 512 },
      { name: "content_type", data_type: DataType.VarChar, max_length: 32 },
      { name: "category", data_type: DataType.VarChar, max_length: 255 },
    ],
    functions: [
      {
        name: "text_bm25",
        type: FunctionType.BM25,
        input_field_names: ["text"],
        output_field_names: ["sparse"],
        params: {},
      },
    ],
    timeout: TIMEOUT_MS,
  });
  if (!isSuccess(created) && !(await hasCollection())) {
    checkStatus(created, "createCollection");
  }
  const denseIndexed = await client.createIndex({
    collection_name: COLLECTION,
    field_name: "dense",
    index_type: "AUTOINDEX",
    metric_type: "COSINE",
    timeout: TIMEOUT_MS,
  });
  const sparseIndexed = await client.createIndex({
    collection_name: COLLECTION,
    field_name: "sparse",
    index_type: "SPARSE_INVERTED_INDEX",
    metric_type: "BM25",
    timeout: TIMEOUT_MS,
  });
  const loaded = await client.loadCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  // Load needs both indexes: when it fails, report the first index that failed (another
  // process may have won the create race, so an index failure alone is not fatal while the
  // load itself succeeds).
  if (!isSuccess(loaded)) {
    checkStatus(denseIndexed, "createIndex(dense)");
    checkStatus(sparseIndexed, "createIndex(sparse)");
  }
  checkStatus(loaded, "loadCollection");
  schemaChecked = true;
  ready = true;
}

// Returns false when the collection does not exist (reads answer empty); otherwise makes
// sure it is loaded before search/query/delete/flush.
async function ensureLoaded(): Promise<boolean> {
  if (!(await hasCollection())) {
    ready = false;
    return false;
  }
  await assertBm25Schema();
  await loadCollection();
  return true;
}

// --- public API ---
export async function upsert(rows: MilvusRow[]): Promise<number> {
  if (rows.length === 0) {
    return 0;
  }
  await ensureCollection(rows[0].dense.length);
  const res = await connect().upsert({
    collection_name: COLLECTION,
    data: rows.map((row) => ({ ...row })),
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "upsert");
  return rows.length;
}

export async function search(
  vector: number[],
  topK: number,
  category: string | null,
): Promise<MilvusHit[]> {
  if (!(await ensureLoaded())) {
    return [];
  }
  const request: SearchSimpleReq = {
    collection_name: COLLECTION,
    data: vector,
    anns_field: "dense",
    limit: topK,
    output_fields: OUTPUT_FIELDS,
    metric_type: "COSINE",
    timeout: TIMEOUT_MS,
  };
  if (category) {
    request.filter = `category == ${quote(category)}`;
  }
  const res = await connect().search(request);
  checkStatus(res, "search");
  return toHits(res.results);
}

// Native BM25 full-text search: the raw query text rides to the `sparse` field produced by
// the BM25 Function (the SDK detects the function-output field and sends a text placeholder).
export async function bm25Search(
  text: string,
  topK: number,
  category: string | null,
): Promise<MilvusHit[]> {
  if (!(await ensureLoaded())) {
    return [];
  }
  const request: SearchSimpleReq = {
    collection_name: COLLECTION,
    data: text,
    anns_field: "sparse",
    limit: topK,
    output_fields: OUTPUT_FIELDS,
    metric_type: "BM25",
    timeout: TIMEOUT_MS,
  };
  if (category) {
    request.filter = `category == ${quote(category)}`;
  }
  const res = await connect().search(request);
  checkStatus(res, "search");
  return toHits(res.results);
}

// Dense + BM25 hybrid search fused inside Milvus with RRF — the same shape as the Python
// original's hybrid_search([dense_req, sparse_req], RRFRanker()). Both legs recall up to
// max(recall, topK) rows (each sub-request inherits the top-level limit) and the fused list
// is sliced down to topK here, mirroring the Python call pattern (legs at recall_top_k,
// final cap applied to the fused result).
export async function hybridSearch(
  vector: number[],
  text: string,
  topK: number,
  recall = 50,
  category: string | null,
): Promise<MilvusHit[]> {
  if (!(await ensureLoaded())) {
    return [];
  }
  const expr = category ? `category == ${quote(category)}` : undefined;
  const request: HybridSearchReq = {
    collection_name: COLLECTION,
    data: [
      {
        data: vector,
        anns_field: "dense",
        params: { metric_type: "COSINE" },
        ...(expr ? { expr } : {}),
      },
      {
        data: text,
        anns_field: "sparse",
        params: { metric_type: "BM25" },
        ...(expr ? { expr } : {}),
      },
    ],
    rerank: { strategy: RANKER_TYPE.RRF, params: { k: RRF_K } },
    limit: Math.max(topK, recall),
    output_fields: OUTPUT_FIELDS,
    timeout: TIMEOUT_MS,
  };
  const res = await connect().hybridSearch(request);
  checkStatus(res, "hybridSearch");
  return toHits(res.results).slice(0, topK);
}

export async function count(): Promise<number> {
  if (!(await ensureLoaded())) {
    return 0;
  }
  const res = await connect().count({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "count");
  return res.data;
}

export async function deleteRows(ids: number[]): Promise<number> {
  if (ids.length === 0) {
    return 0;
  }
  if (!(await ensureLoaded())) {
    return 0;
  }
  const res = await connect().delete({
    collection_name: COLLECTION,
    ids,
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "delete");
  return ids.length;
}

export async function drop(): Promise<void> {
  if (await hasCollection()) {
    const res = await connect().dropCollection({
      collection_name: COLLECTION,
      timeout: TIMEOUT_MS,
    });
    checkStatus(res, "dropCollection");
  }
  ready = false;
  schemaChecked = false;
}

export async function flush(): Promise<void> {
  if (!(await ensureLoaded())) {
    return;
  }
  const res = await connect().flush({
    collection_names: [COLLECTION],
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "flush");
}
