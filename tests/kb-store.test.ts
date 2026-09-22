import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  bm25Search,
  denseSearch,
  hybridSearch,
  invalidateVectorCache,
} from "#/kb/store.ts";

const mocks = vi.hoisted(() => ({
  knowledgeRevision: vi.fn(),
  listVectorizedChunks: vi.fn(),
  milvusEnabled: vi.fn(() => false),
  milvusBm25Search: vi.fn(),
  milvusHybridSearch: vi.fn(),
}));

vi.mock("#/db/repository.ts", () => ({
  knowledgeRevision: mocks.knowledgeRevision,
  listVectorizedChunks: mocks.listVectorizedChunks,
}));
vi.mock("#/kb/milvus.ts", () => ({
  milvusEnabled: mocks.milvusEnabled,
  bm25Search: mocks.milvusBm25Search,
  hybridSearch: mocks.milvusHybridSearch,
}));

function row(
  id: number,
  category: string,
  question: string,
  embedding: number[] = [1, 0],
) {
  return {
    id,
    question,
    answer: "answer",
    section_path: "section",
    content_type: "faq",
    category,
    embedding,
  };
}

describe("knowledge store", () => {
  beforeEach(() => {
    invalidateVectorCache();
    mocks.knowledgeRevision.mockReset();
    mocks.knowledgeRevision.mockResolvedValue("revision");
    mocks.listVectorizedChunks.mockReset();
    mocks.milvusEnabled.mockReset();
    mocks.milvusEnabled.mockReturnValue(false);
    mocks.milvusBm25Search.mockReset();
    mocks.milvusHybridSearch.mockReset();
  });

  it("routes BM25 to Milvus native full-text search when Milvus is the store", async () => {
    mocks.milvusEnabled.mockReturnValue(true);
    const hit = {
      id: 9,
      score: 2.5,
      question: "q",
      answer: "a",
      section_path: "s",
      content_type: "faq",
      category: "shipping",
    };
    mocks.milvusBm25Search.mockResolvedValue([hit]);

    const hits = await bm25Search("shipping", 5, "shipping");

    expect(mocks.milvusBm25Search).toHaveBeenCalledWith(
      "shipping",
      5,
      "shipping",
    );
    expect(hits).toEqual([hit]);
    expect(mocks.listVectorizedChunks).not.toHaveBeenCalled();
  });

  it("routes hybrid search to Milvus RRF fusion when Milvus is the store", async () => {
    mocks.milvusEnabled.mockReturnValue(true);
    mocks.milvusHybridSearch.mockResolvedValue([]);

    await hybridSearch([1, 0], "shipping", 10, 50, null);

    expect(mocks.milvusHybridSearch).toHaveBeenCalledWith(
      [1, 0],
      "shipping",
      10,
      50,
      null,
    );
    expect(mocks.listVectorizedChunks).not.toHaveBeenCalled();
  });

  it("calculates BM25 document frequency inside the category filter", async () => {
    mocks.listVectorizedChunks.mockResolvedValue([
      row(1, "selected", "return policy"),
      ...Array.from({ length: 10 }, (_, index) =>
        row(index + 2, "other", "return policy"),
      ),
    ]);

    const hits = await bm25Search("return", 5, "selected");

    expect(hits.map((hit) => hit.id)).toEqual([1]);
    expect(hits[0]?.score).toBeGreaterThan(0);
  });

  it("reuses the index until the database revision changes", async () => {
    mocks.listVectorizedChunks.mockResolvedValue([row(1, "test", "apple")]);

    expect((await bm25Search("apple", 5))[0]?.id).toBe(1);
    expect((await bm25Search("apple", 5))[0]?.id).toBe(1);
    expect(mocks.listVectorizedChunks).toHaveBeenCalledTimes(1);
  });

  it("reloads SQLite rows when the cross-process revision changes", async () => {
    mocks.knowledgeRevision
      .mockResolvedValueOnce("revision-1")
      .mockResolvedValueOnce("revision-2");
    mocks.listVectorizedChunks
      .mockResolvedValueOnce([row(1, "test", "apple")])
      .mockResolvedValueOnce([row(2, "test", "banana")]);

    expect((await bm25Search("apple", 5))[0]?.id).toBe(1);
    expect((await bm25Search("banana", 5))[0]?.id).toBe(2);
    expect(mocks.listVectorizedChunks).toHaveBeenCalledTimes(2);
  });

  it("ignores external rows without local embeddings", async () => {
    mocks.listVectorizedChunks.mockResolvedValue([
      row(1, "test", "external", []),
      row(2, "test", "local", [1, 0]),
    ]);

    const hits = await denseSearch([1, 0], 5);

    expect(hits.map((hit) => hit.id)).toEqual([2]);
  });

  it("rejects mixed embedding dimensions", async () => {
    mocks.listVectorizedChunks.mockResolvedValue([
      row(1, "test", "mismatched", [1, 0, 0]),
    ]);

    await expect(denseSearch([1, 0], 5)).rejects.toThrow(
      "Embedding dimension mismatch",
    );
  });
});
