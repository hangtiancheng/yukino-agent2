// Smoke Milvus Standalone end to end: drive the Node SDK client (src/kb/milvus.ts) through
// upsert -> dense search -> native BM25 search -> hybrid (RRF) search -> count -> delete ->
// drop against a throwaway "smoke" collection. A failure is a red line: stop.
//
// Same red-line role as the Python original's scripts/smoke_milvus_bm25.py: dense, in-Milvus
// BM25 (BM25 Function over the analyzer-enabled text field) and in-Milvus hybrid RRF must all
// be live. The throwaway collection never touches a real knowledge base.
// Run: node scripts/smoke-milvus.ts
// (requires a running Milvus Standalone — start it with `node main.js milvus-up`; override
// the address with MILVUS_URI, default http://127.0.0.1:19530)

// Point the client at the throwaway collection BEFORE config.ts is imported (loadEnvFile
// does not override an already-set process.env value).
import type { MilvusHit, MilvusRow } from "#/kb/milvus.ts";

process.env.MILVUS_URI ||= "http://127.0.0.1:19530";
process.env.MILVUS_COLLECTION = "smoke";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function main(): Promise<void> {
  const milvus = await import("#/kb/milvus.ts");

  // Clean slate first: a previous run may have left a collection behind, and one created
  // before the BM25 alignment (dense-only schema) would trip the schema guard.
  await milvus.drop().catch(() => undefined);

  // Wait for Milvus to accept calls (a freshly started Standalone needs a moment). count()
  // fails fast with a connection error while it is down, so polling is cheap.
  let ready = false;
  for (let i = 0; i < 24; i += 1) {
    try {
      await milvus.count();
      ready = true;
      break;
    } catch {
      await sleep(500);
    }
  }
  if (!ready) {
    throw new Error(
      `Milvus Standalone did not answer on ${process.env.MILVUS_URI}; start it first: node main.js milvus-up`,
    );
  }
  console.log(`Milvus ready on ${process.env.MILVUS_URI} (collection=smoke)`);

  try {
    // text mirrors what dualwrite.vectorizePending writes: category + question + answer,
    // the same string that feeds the dense embedding.
    const rows: MilvusRow[] = [
      {
        id: 1,
        dense: [0.1, 0.2, 0.3, 0.4],
        text: "logistics\nshipping fee?\nfree over 99",
        question: "shipping fee?",
        answer: "free over 99",
        section_path: "logistics/fee",
        content_type: "faq",
        category: "logistics",
      },
      {
        id: 2,
        dense: [0.9, 0.8, 0.7, 0.6],
        text: "refund\nreturn policy?\n7 days",
        question: "return policy?",
        answer: "7 days",
        section_path: "refund/policy",
        content_type: "faq",
        category: "refund",
      },
      {
        id: 3,
        dense: [0.11, 0.2, 0.3, 0.4],
        text: "logistics\ndelivery time?\n2-3 days",
        question: "delivery time?",
        answer: "2-3 days",
        section_path: "logistics/time",
        content_type: "faq",
        category: "logistics",
      },
      {
        id: 4,
        dense: [0.5, 0.4, 0.5, 0.4],
        text: "product\nlitter box Pro model?\nsupports auto-cleaning and deodorizing",
        question: "litter box Pro model?",
        answer: "supports auto-cleaning and deodorizing",
        section_path: "product/litter-box",
        content_type: "manual",
        category: "product",
      },
    ];
    const upserted = await milvus.upsert(rows);
    console.log("upserted:", upserted);
    if (upserted !== 4) {
      throw new Error(`expected 4 rows upserted, got ${upserted}`);
    }
    // Flushed data still needs a moment before the sparse index serves the new segment, so
    // the BM25 assertions below retry for a few seconds (same timing as the Python smoke).
    await milvus.flush();

    const total = await milvus.count();
    console.log("count:", total);
    if (total !== 4) {
      throw new Error(`expected count 4, got ${total}`);
    }

    // The query vector equals row 1, so COSINE should rank id=1 first at ~1.0.
    const hits = await milvus.search([0.1, 0.2, 0.3, 0.4], 3, null);
    console.log(
      "search:",
      JSON.stringify(hits.map((h) => [h.id, Number(h.score.toFixed(4))])),
    );
    if (hits.length === 0) {
      throw new Error("search returned no hits");
    }
    const top = hits[0];
    if (top.id !== 1) {
      throw new Error(`expected id 1 ranked first, got ${top.id}`);
    }
    if (top.score < 0.99) {
      throw new Error(
        `expected ~1.0 cosine for an exact match, got ${top.score}`,
      );
    }

    // A category filter must exclude the other categories.
    const filtered = await milvus.search([0.1, 0.2, 0.3, 0.4], 3, "refund");
    console.log(
      "filtered(refund):",
      JSON.stringify(filtered.map((h) => [h.id, h.category])),
    );
    if (filtered.some((h) => h.category !== "refund")) {
      throw new Error("category filter leaked rows from other categories");
    }

    // Native BM25: model-number keywords should hit the manual row by term match.
    let bm25: MilvusHit[] = [];
    for (let i = 0; i < 10; i += 1) {
      bm25 = await milvus.bm25Search("litter box Pro auto-cleaning", 2, null);
      if (bm25.length > 0) {
        break;
      }
      await sleep(1_000);
    }
    console.log(
      "bm25:",
      JSON.stringify(bm25.map((h) => [h.id, Number(h.score.toFixed(3))])),
    );
    if (bm25.length === 0) {
      throw new Error("BM25 search returned no hits (native full-text path broken)");
    }
    if (bm25[0].id !== 4) {
      throw new Error(`expected BM25 to rank id 4 first, got ${bm25[0].id}`);
    }

    // Hybrid RRF inside Milvus: dense near row 1 + the shipping-fee terms should fuse row 1 in.
    let hybrid: MilvusHit[] = [];
    for (let i = 0; i < 10; i += 1) {
      hybrid = await milvus.hybridSearch(
        [0.1, 0.2, 0.3, 0.4],
        "shipping fee",
        3,
        10,
        null,
      );
      if (hybrid.length > 0) {
        break;
      }
      await sleep(1_000);
    }
    console.log(
      "hybrid:",
      JSON.stringify(hybrid.map((h) => [h.id, Number(h.score.toFixed(4))])),
    );
    if (hybrid.length === 0) {
      throw new Error("hybridSearch returned no hits (RRF path broken)");
    }
    if (!hybrid.some((h) => h.id === 1)) {
      throw new Error("hybridSearch missed id 1 (expected from both legs)");
    }

    const deleted = await milvus.deleteRows([2]);
    if (deleted !== 1 || (await milvus.count()) !== 3) {
      throw new Error("delete did not remove the requested row");
    }

    await milvus.drop();
    const afterDrop = await milvus.count();
    console.log("count after drop:", afterDrop);
    if (afterDrop !== 0) {
      throw new Error(`expected 0 after drop, got ${afterDrop}`);
    }

    console.log(
      "GO: Milvus Standalone (Node SDK) dense + native BM25 + hybrid RRF all live",
    );
  } finally {
    await milvus.close();
  }
}

await main();
