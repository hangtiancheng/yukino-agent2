import { closeDb } from "#/db/client.ts";
import * as mining from "#/kb/mining.ts";

const stats = await mining.mine();
console.log(`✅ Knowledge mining: ${JSON.stringify(stats)}`);
await closeDb();
