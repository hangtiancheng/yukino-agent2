// Rerank upstream client (not OpenAI protocol). Two wire shapes, picked via RERANK_PROTOCOL:
//   - "jina" (default, what the Python original used): Jina/Cohere-shaped POST {base}/rerank;
//   - "dashscope": the Aliyun DashScope-native text-rerank service, which some managed
//     gateways expose instead of a /rerank endpoint (the OpenAI-compatible tree 404s).
import { z } from "zod";

import { settings } from "#/config.ts";

const VERSION_SEG = /\/v\d+$/;
const RETRY_STATUS = new Set([429, 500, 502, 503, 504]);
const RETRIES = 3;
const BACKOFF_MS = 1500;

function isDashscope(): boolean {
  return settings.rerankProtocol === "dashscope";
}

function rerankUrl(): string {
  let base = settings.rerankBaseUrl.replace(/\/+$/, "");
  if (isDashscope()) {
    // DashScope-native service path. Strip compat-mode/version suffixes so a base shared
    // with the chat/embed slots (…/compatible-mode/v1) still resolves to the gateway root.
    for (const suffix of ["/v1", "/v2", "/compatible-mode", "/compatible-api"]) {
      if (base.endsWith(suffix)) {
        base = base.slice(0, -suffix.length);
      }
    }
    if (!base.endsWith("/api")) {
      base += "/api";
    }
    return `${base}/v1/services/rerank/text-rerank/text-rerank`;
  }
  // Accept bases with or without a version segment; only append /v1 when missing.
  if (!VERSION_SEG.test(base)) {
    base += "/v1";
  }
  return `${base}/rerank`;
}

const resultItemSchema = z.object({
  index: z.number(),
  relevance_score: z.number(),
});
// DashScope nests the results under `output`; jina/cohere return them top-level.
const rerankResponseSchema = z.object({
  results: z.array(resultItemSchema).optional(),
  output: z
    .object({ results: z.array(resultItemSchema).optional() })
    .optional(),
});

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function post(
  url: string,
  body: Record<string, unknown>,
): Promise<Response> {
  let lastResponse: Response | null = null;
  let lastError: unknown = null;
  for (let i = 0; i <= RETRIES; i += 1) {
    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${settings.rerankApiKey}`,
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(60_000),
      });
      if (!RETRY_STATUS.has(resp.status)) {
        return resp;
      }
      lastResponse = resp;
    } catch (error) {
      // Connection-level flakes are transient exactly like 429/5xx.
      lastError = error;
      if (i >= RETRIES) {
        throw error;
      }
    }
    if (i < RETRIES) {
      await sleep(BACKOFF_MS * 2 ** i);
    }
  }
  if (lastResponse === null && lastError !== null) {
    throw lastError instanceof Error
      ? lastError
      : new Error("rerank upstream transport error");
  }
  if (lastResponse === null) {
    throw new Error("rerank upstream produced no response");
  }
  return lastResponse;
}

export async function rerank(
  query: string,
  docs: string[],
  topN: number | null = null,
): Promise<[number, number][]> {
  if (docs.length === 0) {
    return [];
  }
  const body = isDashscope()
    ? {
        model: settings.rerankModel,
        input: { query, documents: docs },
        parameters: { top_n: topN || docs.length, return_documents: false },
      }
    : {
        model: settings.rerankModel,
        query,
        documents: docs,
        top_n: topN || docs.length,
      };
  const resp = await post(rerankUrl(), body);
  if (!resp.ok) {
    throw new Error(
      `rerank upstream returned ${resp.status}: ${await resp.text()}`,
    );
  }
  const data = rerankResponseSchema.parse(await resp.json());
  const ranked = (data.results ?? data.output?.results ?? [])
    .map((r): [number, number] => [r.index, Number(r.relevance_score)])
    .sort((a, b) => b[1] - a[1]);
  return topN ? ranked.slice(0, topN) : ranked;
}
