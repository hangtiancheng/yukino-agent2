// Dual write: relational rows first (pending), then vectors, then mark done.
//
// Legacy mode (MILVUS_URI empty) stores the embedding on the SQLite row. Milvus mode
// upserts the dense vector plus the BM25 source text into Milvus Standalone through the
// Node SDK (the server derives the sparse vector from the text) and records only the
// vector id + status on the row (the embedding column stays null). See src/kb/milvus.ts.
import type { Chunk } from "./documents.ts";
import * as milvus from "./milvus.ts";

import { settings } from "#/config.ts";
import { embedTexts } from "#/core/embeddings.ts";
import {
  deleteKnowledgeChunks,
  insertKnowledgeChunks,
  listChunksForVectorization,
  markChunkVectorized,
  markChunkVectorizedExternal,
  rependChunkTexts,
} from "#/db/repository.ts";

export async function writePending(chunks: Chunk[]): Promise<number[]> {
  return insertKnowledgeChunks(chunks);
}

export async function deleteChunks(ids: number[]): Promise<void> {
  if (ids.length === 0) {
    return;
  }
  if (milvus.milvusEnabled()) {
    await milvus.deleteRows(ids);
  }
  await deleteKnowledgeChunks(ids);
}

export interface RependChunk {
  id: number;
  questions: string;
  answer: string;
}

export async function rependChunks(chunks: RependChunk[]): Promise<void> {
  if (chunks.length === 0) {
    return;
  }
  if (milvus.milvusEnabled()) {
    await milvus.deleteRows(chunks.map((chunk) => chunk.id));
  }
  await rependChunkTexts(chunks);
}

function* batches<T>(items: T[], size: number): Generator<T[]> {
  for (let i = 0; i < items.length; i += size) {
    yield items.slice(i, i + size);
  }
}

// The Aliyun embed gateway rejects more than 20 texts per request, while the vectorize
// batch is 64 (matching the Python original's upsert granularity). Split each batch's embed
// calls so small upstream caps are satisfied without shrinking the Milvus upsert batches.
const MAX_EMBED_BATCH = 20;

async function embedInChunks(texts: string[]): Promise<number[][]> {
  const vectors: number[][] = [];
  for (const chunk of batches(texts, MAX_EMBED_BATCH)) {
    vectors.push(...(await embedTexts(chunk)));
  }
  return vectors;
}

export async function vectorizePending(batchSize = 64): Promise<number> {
  const useMilvus = milvus.milvusEnabled();
  const pending = await listChunksForVectorization(
    useMilvus,
    settings.embedModel,
  );
  const externalIds: number[] = [];
  let done = 0;
  for (const batch of batches(pending, batchSize)) {
    // One string serves both vector paths: it is embedded into `dense` and stored as `text`
    // for the in-Milvus BM25 Function (same concatenation as the Python original).
    const texts = batch.map(
      (row) => `${row.category}\n${row.questions}\n${row.answer}`,
    );
    const vectors = await embedInChunks(texts);
    if (useMilvus) {
      const rows = batch.map((row, index): milvus.MilvusRow => ({
        id: row.id,
        dense: vectors[index],
        text: texts[index],
        question: row.questions,
        answer: row.answer,
        section_path: row.sectionPath ?? "",
        content_type: row.contentType ?? "",
        category: row.category ?? "",
      }));
      await milvus.upsert(rows);
      externalIds.push(...batch.map((row) => row.id));
    } else {
      for (let index = 0; index < batch.length; index += 1) {
        const row = batch[index];
        await markChunkVectorized(
          row.id,
          String(row.id),
          vectors[index],
          settings.embedModel,
        );
        done += 1;
      }
    }
  }
  if (externalIds.length > 0) {
    await milvus.flush();
    for (const id of externalIds) {
      await markChunkVectorizedExternal(id, String(id), settings.embedModel);
      done += 1;
    }
  }
  return done;
}
