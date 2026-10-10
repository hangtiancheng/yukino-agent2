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
const OUTPUT_FIELDS = [
  "id",
  "question",
  "answer",
  "section_path",
  "content_type",
  "category",
];
const RRF_K = 60;

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

let cachedClient: MilvusClient | null = null;
let ready = false;
let schemaChecked = false;

function connect(): MilvusClient {
  if (cachedClient !== null) {
    return cachedClient;
  }
  const address = settings.milvusUri.replace(/^https?:\/\//, "");
  const config: ConstructorParameters<typeof MilvusClient>[0] = {
    address,
    timeout: TIMEOUT_MS,
    logLevel: "warn",
  };
  if (settings.milvusToken !== "") {
    config.token = settings.milvusToken;
  }
  cachedClient = new MilvusClient(config);
  cachedClient.connectPromise.catch(() => undefined);
  return cachedClient;
}

export async function close(): Promise<void> {
  if (cachedClient !== null) {
    await cachedClient.closeConnection();
    cachedClient = null;
    ready = false;
    schemaChecked = false;
  }
}

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
      {
        name: "text",
        data_type: DataType.VarChar,
        max_length: 16384,
        enable_analyzer: true,
        analyzer_params: { type: "standard" },
      },
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
  if (!isSuccess(loaded)) {
    checkStatus(denseIndexed, "createIndex(dense)");
    checkStatus(sparseIndexed, "createIndex(sparse)");
  }
  checkStatus(loaded, "loadCollection");
  schemaChecked = true;
  ready = true;
}

async function ensureLoaded(): Promise<boolean> {
  if (!(await hasCollection())) {
    ready = false;
    return false;
  }
  await assertBm25Schema();
  await loadCollection();
  return true;
}

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
