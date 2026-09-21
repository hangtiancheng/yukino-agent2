// Hono application: middleware, API routes and the startup/shutdown lifecycle.
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { pinoLogger } from "hono-pino";

import { acceptanceRouter } from "./api/acceptance.ts";
import { actionsRouter } from "./api/actions.ts";
import { adminRouter } from "./api/admin.ts";
import { agentRouter } from "./api/agent.ts";
import { chatRouter } from "./api/chat.ts";
import { conversationsRouter } from "./api/conversations.ts";
import { extractRouter } from "./api/extract.ts";
import { feedbackRouter } from "./api/feedback.ts";
import { jobsRouter } from "./api/jobs.ts";
import { kbRouter } from "./api/kb.ts";
import { observabilityRouter } from "./api/observability.ts";
import { ragevalRouter } from "./api/rageval.ts";
import { reviewRouter } from "./api/review.ts";
import { topicsRouter } from "./api/topics.ts";
import { settings } from "./config.ts";
import * as budget from "./core/budget.ts";
import * as jobs from "./core/jobs.ts";
import {
  initObservability,
  shutdownObservability,
} from "./core/observability.ts";
import { assertDbReady, closeDb } from "./db/client.ts";
import * as runtime from "./graph/runtime.ts";
import * as milvus from "./kb/milvus.ts";
import { childLogger, flushLogs, logger } from "./logger.ts";

const log = childLogger("server");

export function createApp(): Hono {
  const app = new Hono();
  app.use(pinoLogger({ pino: logger }));

  app.get("/healthz", (c) => c.json({ ok: true }));
  app.route("/", acceptanceRouter);
  app.route("/", actionsRouter);
  app.route("/", adminRouter);
  app.route("/", agentRouter);
  app.route("/", chatRouter);
  app.route("/", conversationsRouter);
  app.route("/", extractRouter);
  app.route("/", feedbackRouter);
  app.route("/", jobsRouter);
  app.route("/", kbRouter);
  app.route("/", observabilityRouter);
  app.route("/", ragevalRouter);
  app.route("/", reviewRouter);
  app.route("/", topicsRouter);

  app.notFound((c) => c.json({ detail: `Not Found: ${c.req.path}` }, 404));
  app.onError((error, c) => {
    if (error instanceof HTTPException) {
      return c.json({ detail: error.message }, error.status);
    }
    log.error({ err: error, path: c.req.path }, "unhandled error");
    return c.json(
      { detail: "Internal server error; please try again later" },
      500,
    );
  });
  return app;
}

function checkContextBudget(): void {
  const b = budget.compute();
  if (b.healthy) {
    log.info({ budget: budget.describe(b) }, "context budget ok");
  } else {
    log.error(
      {
        budget: budget.describe(b),
        window: b.window,
        fixed: b.fixed,
        peak: b.peak,
      },
      "context budget too small; raise MODEL_CONTEXT_WINDOW or lower MAX_AGENT_STEPS / " +
        "TOOL_RESULT_MAX_TOKENS / MAX_OUTPUT_TOKENS / RERANK_TOP_K",
    );
  }
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Warm up Milvus before serving (same as the Python original's lifespan probe): a collection
// load completes asynchronously server-side and searches against a not-yet-ready collection
// answer silently empty, so probe the BM25 path until a hit comes back. Best-effort — a down
// Milvus or an empty KB only warns; startup is never blocked past the probe budget.
async function warmupMilvus(): Promise<void> {
  if (!milvus.milvusEnabled()) {
    return;
  }
  try {
    for (let attempt = 0; attempt < 15; attempt += 1) {
      const hits = await milvus.bm25Search("shipping fee", 1, null);
      if (hits.length > 0) {
        log.info("milvus warmup complete; collection searchable");
        return;
      }
      await sleep(1_000);
    }
    log.warn("milvus warmup timed out (15s) with no hits; continuing");
  } catch (error) {
    log.warn({ err: error }, "milvus warmup failed; continuing");
  }
}

export async function startServer(): Promise<void> {
  await assertDbReady();
  initObservability();
  checkContextBudget();
  await warmupMilvus();
  runtime.initGraph();
  const app = createApp();
  const server = serve({
    fetch: app.fetch,
    port: settings.port,
    hostname: settings.host,
  });

  const shutdown = (signal: string): void => {
    log.info({ signal }, "shutting down");
    server.close(() => {
      void (async () => {
        try {
          runtime.closeGraph();
          await shutdownObservability();
          await closeDb();
        } catch (error) {
          log.warn({ err: error }, "shutdown cleanup failed");
        }
        try {
          await flushLogs();
        } finally {
          process.exit(0);
        }
      })();
    });
  };
  process.once("SIGINT", () => {
    shutdown("SIGINT");
  });
  process.once("SIGTERM", () => {
    shutdown("SIGTERM");
  });
  log.info(
    { port: settings.port, jobs: Object.keys(jobs.JOBS).length },
    "server listening",
  );
}
