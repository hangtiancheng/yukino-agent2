// Direct Milvus Standalone client (official Node SDK, gRPC :19530).
//
// Dense-only by design, same split as the Python original (~/Downloads/python
// app/kb/milvus_client.py) minus the in-Milvus sparse path: BM25 stays in-process on this
// side (SQLite text) and hybrid is fused in store.ts with the existing reciprocal-rank-fusion
// code. Milvus Standalone replaces the old Milvus Lite deployment that needed a Python gRPC
// bridge; the Node server now talks to Milvus directly, so there is no bridge process.
//
// Semantics preserved from the bridge: the collection is created lazily on the first upsert
// with the dimension inferred from that embedding (model-agnostic, never hardcoded), a
// missing collection reads as empty (search -> [], count -> 0), and every failure throws so
// store.ts surfaces a down Milvus instead of silently degrading.
import {
  DataType,
  ErrorCode,
  MilvusClient,
  type ResStatus,
  type SearchSimpleReq,
} from "@zilliz/milvus2-sdk-node";

import { settings } from "#/config.ts";

const COLLECTION = settings.milvusCollection;
const TIMEOUT_MS = 15_000;
const OUTPUT_FIELDS = [
  "question",
  "answer",
  "section_path",
  "content_type",
  "category",
];

// A chunk row upserted into Milvus. `dense` is the only indexed field; the scalars are
// carried so Search can return full hits without a SQLite join.
export interface MilvusRow {
  id: number;
  dense: number[];
  question: string;
  answer: string;
  section_path: string;
  content_type: string;
  category: string;
}

// A dense-search hit. Structurally assignable to store.ts's KnowledgeHit (rerank_score is
// optional there and set later by the rerank step).
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

async function hasCollection(): Promise<boolean> {
  const res = await connect().hasCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  checkStatus(res, "hasCollection");
  return Boolean(res.value);
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
      { name: "question", data_type: DataType.VarChar, max_length: 2048 },
      { name: "answer", data_type: DataType.VarChar, max_length: 8192 },
      { name: "section_path", data_type: DataType.VarChar, max_length: 512 },
      { name: "content_type", data_type: DataType.VarChar, max_length: 32 },
      { name: "category", data_type: DataType.VarChar, max_length: 255 },
    ],
    timeout: TIMEOUT_MS,
  });
  if (!isSuccess(created) && !(await hasCollection())) {
    checkStatus(created, "createCollection");
  }
  const indexed = await client.createIndex({
    collection_name: COLLECTION,
    field_name: "dense",
    index_type: "AUTOINDEX",
    metric_type: "COSINE",
    timeout: TIMEOUT_MS,
  });
  const loaded = await client.loadCollection({
    collection_name: COLLECTION,
    timeout: TIMEOUT_MS,
  });
  // Load needs the index: when both failed the index error is the root cause; a failed
  // createIndex with a successful load means another process created the index first.
  if (!isSuccess(loaded) && !isSuccess(indexed)) {
    checkStatus(indexed, "createIndex");
  }
  checkStatus(loaded, "loadCollection");
  ready = true;
}

// Returns false when the collection does not exist (reads answer empty); otherwise makes
// sure it is loaded before search/query/delete/flush.
async function ensureLoaded(): Promise<boolean> {
  if (!(await hasCollection())) {
    ready = false;
    return false;
  }
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
  return res.results.map((hit) => ({
    id: Number(hit.id),
    score: hit.score,
    question: String(hit.question ?? ""),
    answer: String(hit.answer ?? ""),
    section_path: String(hit.section_path ?? ""),
    content_type: String(hit.content_type ?? ""),
    category: String(hit.category ?? ""),
  }));
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
