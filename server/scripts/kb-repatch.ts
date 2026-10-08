// Patch-style re-ingest: align data/kb/*.md chunks with DB rows by (section path, index)
// and update only the bodies that changed. Never inserts or deletes:
//  - sections present in the md but not in the DB are report-only (go through kb-build or the ingest page);
//  - DB rows not present in any md are report-only (they are flywheel write-backs or manually
//    ingested chunks that exist only in the DB — deleting them here would lose them for good).
import fs from "node:fs";
import path from "node:path";

import { closeDb } from "#/db/client.ts";
import * as repository from "#/db/repository.ts";
import * as documents from "#/kb/documents.ts";
import * as dualwrite from "#/kb/dualwrite.ts";
import { KB_DIR, SOURCE_TYPES } from "#/kb/sources.ts";

function norm(s: string): string {
  return (s ?? "")
    .trim()
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
}

async function main(): Promise<void> {
  const inDb = (
    await repository.listChunksByContentTypes(Object.values(SOURCE_TYPES))
  ).filter((row) => row.category !== "flywheel_review");
  // A section path can map to several chunks (large tables are split); align by type + path + index.
  const byPath = new Map<string, typeof inDb>();
  for (const row of inDb) {
    const key = `${row.contentType ?? ""}\u0000${row.sectionPath ?? ""}`;
    const list = byPath.get(key) ?? [];
    list.push(row);
    byPath.set(key, list);
  }
  const used = new Map<string, number>();
  const updates: dualwrite.RependChunk[] = [];
  let added = 0;
  let orphans = 0;

  for (const [fname, contentType] of Object.entries(SOURCE_TYPES)) {
    const md = fs.readFileSync(path.join(KB_DIR, fname), "utf8");
    for (const chunk of await documents.buildChunks(md, contentType)) {
      const pathKey = `${contentType}\u0000${chunk.sectionPath}`;
      const index = used.get(pathKey) ?? 0;
      used.set(pathKey, index + 1);
      const rows = byPath.get(pathKey) ?? [];
      const row = rows[index];
      if (row === undefined) {
        added += 1;
        console.log(
          `  + in md but not in DB (report-only; use kb-build or the ingest page): ${chunk.sectionPath} chunk ${index + 1}`,
        );
        continue;
      }
      if (
        norm(row.answer) === norm(chunk.answer) &&
        norm(row.questions) === norm(chunk.questions)
      ) {
        continue;
      }
      updates.push({
        id: row.id,
        questions: chunk.questions,
        answer: chunk.answer,
      });
      console.log(`  ~ body updated (id=${row.id}): ${chunk.sectionPath}`);
    }
  }

  for (const [pathKey, rows] of byPath) {
    const start = used.get(pathKey) ?? 0;
    for (const row of rows.slice(start)) {
      orphans += 1;
      console.log(
        `  ! in DB but not in md (untouched; may be a flywheel write-back or manually ingested): id=${row.id} ${row.sectionPath ?? "(no path)"}`,
      );
    }
  }

  await dualwrite.rependChunks(updates);
  const pending = await repository.countChunksByStatus("pending");
  console.log(
    `\n${updates.length} chunks changed · ${added} new sections (report-only) · ${orphans} DB-only rows (untouched) · ${pending} chunks currently pending`,
  );
  if (pending > 0) {
    console.log("Next step: kb-vectorize (re-embed the pending chunks)");
  }
}

await main();
await closeDb();
