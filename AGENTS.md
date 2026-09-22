@eslint.config.js

- MUST Ignore ALL eslint warnings
- NEVER add MIT license header manually
- Yukino Agent2 is a pure English project
- Ensure good type annotation for python code
- @package.json
- Project Brand Name: MeowMeow Select
- Project Agent Persona: Meow

## Python project layout (single uv project)

- ONE uv project at the repo root: `pyproject.toml` + `uv.lock` + `.python-version`
  (3.13) cover every Python subtree — `scripts/train/py`. Do not
  create per-directory `pyproject.toml` / `uv.lock` / `.python-version` files.
- Python gates: `uv run ruff check .`, `uv run ruff format --check .`,
  `uv run --with mypy mypy` (strict; scoped via `files`). There are no Python
  tests; all tests run through vitest (root `tests/` and `mcp/tests`).

## mcp/ GitHub MCP server (TypeScript)

- `mcp/` is the GitHub MCP server, part of the root pnpm package (no
  `package.json` of its own): stdio by default, `--http` (or `MCP_TRANSPORT=http`)
  adds Streamable HTTP (`POST /mcp`) + legacy SSE (`GET /sse`) on
  `MCP_HOST:MCP_PORT` (default `127.0.0.1:3300`), hosted by h3 v2. Run it as
  `pnpm tsx mcp/src/main.ts` (or `node main.js agent2-mcp` / `node main.js agent2-mcp-http`);
  details in `mcp/README.md`.
- TS gates: `pnpm typecheck`, `pnpm lint`, `pnpm test` (vitest picks up
  `mcp/tests/*.test.ts` together with the root `tests/`).

## Milvus migration (Python Milvus => Node -> Milvus Standalone)

The Python original ran Milvus Standalone with dense + sparse(BM25) + hybrid all inside
Milvus. This stack's Milvus behaviour is aligned with that original:

- Node (`src/kb/store.ts`, `src/kb/dualwrite.ts`) -> official Node SDK client
  (`src/kb/milvus.ts`, `@zilliz/milvus2-sdk-node`) -> Milvus Standalone (gRPC
  `127.0.0.1:19530`). No bridge process: the old Python gRPC bridge + Milvus Lite
  (`src/milvus/`) was replaced by the direct SDK connection.
- Opt-in via `MILVUS_URI` (empty = legacy in-process cosine + BM25 over the relational DB;
  `MILVUS_TOKEN` for a secured instance). When set, Milvus is the authoritative vector
  store: dense ANN, native BM25 full-text search (BM25 Function over the analyzer-enabled
  `text` field) and hybrid RRF fusion all run inside Milvus, same as the Python original.
  Standalone itself is installed via RPM/DEB (systemd `milvus.service`, preferred)
  or the vendored `deploy/milvus/docker-compose.yml` (fallback); `node main.js
milvus-up/down` drives either install and waits on `http://127.0.0.1:9091/healthz`,
  smoke with `node scripts/smoke-milvus.ts` (dense + BM25 + hybrid red line).
- The collection carries dense(COSINE/AUTOINDEX) + text(analyzer) + sparse(BM25 Function
  output, SPARSE_INVERTED_INDEX) + scalar fields; upserts write `text` (category +
  questions + answer, the same string that gets embedded) and the server derives `sparse`.
  Collection dim is inferred from the first upserted embedding (model-agnostic, never
  hardcoded); the collection is created with Strong consistency so the dual-write count
  check stays deterministic. A collection created before this alignment (dense-only
  schema) is rejected with explicit rebuild steps (kb-reset + kb-build + kb-vectorize).
