import type { MilvusHit, MilvusRow } from "#/kb/milvus.ts";

process.env.MILVUS_URI ||= "http://127.0.0.1:19530";
process.env.MILVUS_COLLECTION = "smoke";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function main(): Promise<void> {
  const milvus = await import("#/kb/milvus.ts");

  await milvus.drop().catch(() => undefined);

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
    await milvus.flush();

    const total = await milvus.count();
    console.log("count:", total);
    if (total !== 4) {
      throw new Error(`expected count 4, got ${total}`);
    }

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

    const filtered = await milvus.search([0.1, 0.2, 0.3, 0.4], 3, "refund");
    console.log(
      "filtered(refund):",
      JSON.stringify(filtered.map((h) => [h.id, h.category])),
    );
    if (filtered.some((h) => h.category !== "refund")) {
      throw new Error("category filter leaked rows from other categories");
    }

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
      throw new Error(
        "BM25 search returned no hits (native full-text path broken)",
      );
    }
    if (bm25[0].id !== 4) {
      throw new Error(`expected BM25 to rank id 4 first, got ${bm25[0].id}`);
    }

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
