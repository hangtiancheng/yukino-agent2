import { settings } from "#/config.ts";
import { embedTexts } from "#/core/embeddings.ts";

async function main(): Promise<void> {
  const vectors = await embedTexts([
    "how much is the shipping fee",
    "how is the shipping fee calculated",
  ]);
  const dims = vectors.map((v) => v.length);
  console.log(
    `model=${settings.embedModel} returned ${vectors.length} vectors, dims=${JSON.stringify(dims)}`,
  );
  if (vectors.length !== 2) {
    throw new Error(`expected 2 vectors, got ${vectors.length}`);
  }
  if (dims[0] === 0 || dims.some((d) => d !== dims[0])) {
    throw new Error(
      `inconsistent or empty embedding dims: ${JSON.stringify(dims)}`,
    );
  }
  console.log(`✅ Smoke passed: embedding upstream reachable, dim ${dims[0]}`);
}

await main();
