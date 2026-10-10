import { z } from "zod";

import { settings } from "#/config.ts";

const BASE = `http://localhost:${settings.port ?? 8000}`;

const SAMPLES: [string, Set<string> | null][] = [
  ["Where is the logistics for order 1001", new Set(["query_logistics"])],
  ["What is the returns policy", new Set(["query_faq"])],
  ["Can the shoes I bought be returned", new Set(["query_faq"])],
  ["How much is the shipping fee", new Set(["query_faq"])],
  ["Is the iPhone still in stock", new Set(["query_product"])],
  ["How much is order 2002", new Set(["query_order"])],
  ["I want to complain, please register it for me", new Set(["create_ticket"])],
  ["What's the weather like today", null],
];

const agentResponseSchema = z.object({
  answer: z.string(),
  tool_calls: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      args: z.record(z.string(), z.unknown()),
    }),
  ),
  tool_results: z.array(
    z.object({
      tool_call_id: z.string(),
      name: z.string(),
      ok: z.boolean(),
      content: z.string(),
    }),
  ),
});
type AgentResponse = z.infer<typeof agentResponseSchema>;

const faqContentSchema = z
  .object({ citations: z.array(z.unknown()).default([]) })
  .loose();

function faqNote(body: AgentResponse): string {
  const faqCalls = body.tool_calls.filter((tc) => tc.name === "query_faq");
  const faqResults = body.tool_results.filter((tr) => tr.name === "query_faq");
  if (faqCalls.length === 0 || faqResults.length === 0) {
    return "";
  }
  const keyword = faqCalls[0].args.keyword;
  const parsed = faqContentSchema.safeParse(JSON.parse(faqResults[0].content));
  const hits = parsed.success ? parsed.data.citations : [];
  return `  [query_faq keyword=${JSON.stringify(keyword ?? "")} missed_recall=${hits.length === 0 ? "yes" : "no"}]`;
}

async function main(): Promise<void> {
  let passed = 0;
  for (const [msg, expect] of SAMPLES) {
    const resp = await fetch(`${BASE}/api/agent`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user_id: "eval", message: msg }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status}: ${await resp.text()}`);
    }
    const body = agentResponseSchema.parse(await resp.json());
    const names = new Set(body.tool_calls.map((tc) => tc.name));
    const ok =
      expect === null
        ? names.size === 0
        : [...expect].some((e) => names.has(e));
    passed += ok ? 1 : 0;
    const got = names.size > 0 ? JSON.stringify([...names]) : "(no tool call)";
    const want = expect === null ? "none" : JSON.stringify([...expect]);
    console.log(
      `${ok ? "✅" : "❌"} ${JSON.stringify(msg)} -> ${got} expected=${want}${faqNote(body)}`,
    );
    console.log(`    answer: ${body.answer.slice(0, 70)}`);
  }
  console.log(
    `\nCorrect tool selection ${passed}/${SAMPLES.length} (the LLM is non-deterministic; rerun and record honestly if results wobble)`,
  );
}

await main();
