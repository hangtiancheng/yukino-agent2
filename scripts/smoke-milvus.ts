// Smoke Milvus Standalone end to end: drive the Node SDK client (src/kb/milvus.ts) through
// upsert -> search -> count -> delete -> drop against a throwaway "smoke" collection.
// A failure is a red line: stop.
//
// Scoped to dense only, like the rest of this stack: BM25 stays in-process on the Node side
// (see src/kb/store.ts). The throwaway collection never touches a real knowledge base.
// Run: node scripts/smoke-milvus.ts
// (requires a running Milvus Standalone — start it with `node main.js milvus-up`; override
// the address with MILVUS_URI, default http://127.0.0.1:19530)

// Point the client at the throwaway collection BEFORE config.ts is imported (loadEnvFile
// does not override an already-set process.env value).
import type { MilvusRow } from "#/kb/milvus.ts";

process.env.MILVUS_URI ||= "http://127.0.0.1:19530";
process.env.MILVUS_COLLECTION = "smoke";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function main(): Promise<void> {
  const milvus = await import("#/kb/milvus.ts");

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
    // Clean slate: a previous failed run may have left rows behind.
    await milvus.drop();

    const rows: MilvusRow[] = [
      {
        id: 1,
        dense: [0.1, 0.2, 0.3, 0.4],
        question: "shipping fee?",
        answer: "free over 99",
        section_path: "logistics/fee",
        content_type: "faq",
        category: "logistics",
      },
      {
        id: 2,
        dense: [0.9, 0.8, 0.7, 0.6],
        question: "return policy?",
        answer: "7 days",
        section_path: "refund/policy",
        content_type: "faq",
        category: "refund",
      },
      {
        id: 3,
        dense: [0.11, 0.2, 0.3, 0.4],
        question: "delivery time?",
        answer: "2-3 days",
        section_path: "logistics/time",
        content_type: "faq",
        category: "logistics",
      },
    ];
    const upserted = await milvus.upsert(rows);
    console.log("upserted:", upserted);
    if (upserted !== 3) {
      throw new Error(`expected 3 rows upserted, got ${upserted}`);
    }
    await milvus.flush();

    const total = await milvus.count();
    console.log("count:", total);
    if (total !== 3) {
      throw new Error(`expected count 3, got ${total}`);
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

    const deleted = await milvus.deleteRows([2]);
    if (deleted !== 1 || (await milvus.count()) !== 2) {
      throw new Error("delete did not remove the requested row");
    }

    await milvus.drop();
    const afterDrop = await milvus.count();
    console.log("count after drop:", afterDrop);
    if (afterDrop !== 0) {
      throw new Error(`expected 0 after drop, got ${afterDrop}`);
    }

    console.log(
      "GO: Milvus Standalone (Node SDK) upsert/search/count/drop all live",
    );
  } finally {
    await milvus.close();
  }
}

await main();
