import { closeDb } from "#/db/client.ts";
import { bm25Search, count, hybridSearch, tokenize } from "#/kb/store.ts";

async function main(): Promise<void> {
  const tokens = tokenize("How is the shipping fee calculated 运费怎么算");
  console.log("tokenize:", JSON.stringify(tokens));
  if (tokens.length === 0) {
    throw new Error("tokenize returned no tokens");
  }

  const total = await count();
  console.log(`knowledge store count=${total}`);
  if (total === 0) {
    console.log(
      "KB is empty — nothing to smoke. Run `node main.js kb-build && node main.js kb-vectorize` first.",
    );
    return;
  }

  const bm25 = await bm25Search("shipping fee", 2);
  console.log(
    "bm25:",
    JSON.stringify(bm25.map((h) => [h.id, Number(h.score.toFixed(3))])),
  );
  if (bm25.length === 0) {
    throw new Error("BM25 returned no results for a keyword present in the KB");
  }

  const { embedQuery } = await import("#/core/embeddings.ts");
  const vec = await embedQuery("shipping fee");
  const hybrid = await hybridSearch(vec, "shipping fee", 2);
  console.log(
    "hybrid:",
    JSON.stringify(hybrid.map((h) => [h.id, Number(h.score.toFixed(3))])),
  );
  if (hybrid.length === 0) {
    throw new Error("hybridSearch returned no results");
  }

  console.log("GO: local BM25 + hybrid retrieval path is live");
}

try {
  await main();
} finally {
  await closeDb();
}
