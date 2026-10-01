# yukino-agent2 server

Node.js/TypeScript backend for the yukino-agent2 e-commerce customer-service agent. This is the
migrated backend of the Python project in `~/Downloads/python` (the static pages are out of scope).
It is not wire-compatible with the Python service; capabilities are aligned, response shapes are
kept close.

## Stack

Hono + zod (HTTP), LangChain / LangGraph + Postgres checkpointer (agent graph), Prisma +
PostgreSQL (data), pino (logging), official MCP SDK (tool servers/clients), Langfuse
over OTel (optional tracing), Vitest + ESLint (tests/lint).

## Upstreams

Three direct upstreams are configured through `.env` (see `.env.example`): chat
(`CHAT_*`), embeddings (`EMBED_*`, OpenAI compatible) and rerank (`RERANK_*`,
Jina/Cohere shaped). Intent and summary slots fall back to the chat group unless
`INTENT_*` / `SUMMARY_*` are set.

## Storage

The Python project used MySQL + Milvus Standalone. This server uses PostgreSQL for relational data:

- relational tables live in the database pointed to by `DATABASE_URL` (Prisma schema in `prisma/schema.prisma`); run `pnpm db:migrate` before the first start;
- without `MILVUS_URI` (legacy mode), dense embeddings are stored on `knowledge_chunks` and
  scored in-process, and BM25 is computed in-process with CJK bigram tokenization, so the
  four retrieval strategies (`vector` / `bm25` / `hybrid` / `hybrid_rerank`) keep working
  without a vector database;
- the LangGraph checkpointer uses `CHECKPOINTER_DB_URL` (PostgreSQL; the database is created
  automatically on first start and the saver creates its own tables inside it).

### Optional: Milvus Standalone vector store

Retrieval can instead run against a real Milvus Standalone — the Node server talks to
it directly through the official Node SDK (`src/kb/milvus.ts`, gRPC on `:19530`); there is no
bridge process. Install Milvus Standalone first, either way is supported by
`node main.js milvus-up/down`:

1. **RPM/DEB package (preferred)** — download `milvus_<ver>-1_<arch>.deb` / `.rpm` for your
   architecture from the Milvus releases page, install it with your package manager
   (`apt install -y ./milvus_*.deb` or `yum install -y ./milvus_*.rpm`), which registers the
   `milvus.service` systemd unit that `milvus-up` starts and health-checks.
2. **Docker Compose (fallback)** — with Docker installed, `milvus-up` runs the vendored
   official compose file `deploy/milvus/docker-compose.yml` (etcd + MinIO + standalone,
   volumes under `deploy/milvus/volumes/`).

```bash
node main.js milvus-up                            # start + wait for healthz (systemd or docker)
echo 'MILVUS_URI=http://127.0.0.1:19530' >> .env  # then restart the Node server
node main.js kb-vectorize                         # re-embed: rows now upsert into Milvus
node scripts/smoke-milvus.ts                      # end-to-end smoke (throwaway collection)
node main.js milvus-down                          # stop Milvus Standalone
```

With `MILVUS_URI` set, Milvus is the authoritative vector store (the relational `embedding`
column stays null; `vector_id` + status are still recorded) and a down Milvus surfaces as an
error instead of silently degrading. Behaviour matches the Python original: dense ANN,
native BM25 full-text search (a BM25 Function derives the `sparse` field from the
analyzer-enabled `text` field, written as category + questions + answer on every upsert)
and `hybrid` RRF fusion all run inside Milvus. The collection is created lazily on the
first upsert with the embedding dimension inferred from the data (model-agnostic), Strong
consistency (matches the always-consistent legacy store), and `MILVUS_TOKEN` covers a
secured instance. A collection created by an older dense-only build is rejected on use with
rebuild instructions (`node main.js kb-reset && node main.js kb-build && node main.js
kb-vectorize`).

## Offline jobs

`node main.js <command>` and the admin pages' "re-run" buttons share one job runner (`src/core/jobs.ts`); the
front end can only submit a registered job name, never a shell fragment. Course acceptance/smoke
scripts (`scripts/eval-*.ts`, `scripts/smoke-*.ts`, `scripts/validate-*.ts`, `scripts/bare-agent-loop.ts`)
are offline tools that drive a running server or an upstream directly.
