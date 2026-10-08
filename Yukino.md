# Yukino.md — Python → TypeScript migration record

An honest, complete record of every difference between the Python original
(`.legacy/python`, the 10-chapter "Xiaolin coding" agent course project, MewHelp/喵喵优选)
and this TypeScript migration (`server/` + `client/`, Yukino Select).

Categories used below:

- **§1 Not migrated (deliberate)** — capabilities that exist in Python but were
  consciously dropped, with the reason (TS-language/ecosystem limitation or scope decision).
- **§2 Platform replacements** — same capability, different technology.
- **§3 Deliberate behavioral adaptations** — same code path, intentionally different values.
- **§4 Known accepted differences (not fixed)** — small contract/shape differences kept as-is.
- **§5 TS limitations that shaped implementations** — where the language forced a different
  (but equivalent) construction.
- **§6 Migration defects found and fixed (2026-10-06 review)** — real regressions the port
  introduced; all fixed, listed so the history stays honest.
- **§7 TS-side additions** — things that exist only here (so they are not mistaken for gaps).
- **§8 Mapping tables** — scripts, jobs, layout.

Chapter status: **ch01–ch09 fully migrated; ch10 not migrated (§1.1).**

---

## 1. Not migrated (deliberate)

### 1.1 ch10 — model fine-tuning & topic classifier (TS ecosystem limitation)

The entire ch10 pipeline is out of scope. It is built on the Python ML stack
(PyTorch, HuggingFace transformers, ONNX Runtime, RoBERTa-wwm-ext full-parameter
fine-tuning), which has no practical Node/TS equivalent for the training path.
Everything below was dropped together, and the TS side has no dangling references
(the `TopicClassification` table was removed by the Prisma migration
`20260928000355_drop_topic_classification`):

| Python artifact                                                                       | Purpose                                                                            | Status                       |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------- |
| `scripts/ch10/build_corpus.py`                                                        | pool → clean → prelabel → supplement corpus pipeline                               | not migrated                 |
| `scripts/ch10/build_dataset.py`                                                       | stratified 80/10/10 split + augmentation                                           | not migrated                 |
| `scripts/ch10/train.py`                                                               | RoBERTa full-parameter fine-tuning (MPS/CUDA/CPU)                                  | not migrated (TS limitation) |
| `scripts/ch10/evaluate.py`                                                            | per-class P/R/F1, confusion matrix, red lines                                      | not migrated                 |
| `scripts/ch10/export_onnx.py`                                                         | ONNX export + torch-parity check                                                   | not migrated                 |
| `scripts/ch10/scan_threshold_replay.py`                                               | nine-candidate threshold replay                                                    | not migrated                 |
| `scripts/ch10/serve.py` (:8110)                                                       | ONNX inference service                                                             | not migrated                 |
| `scripts/ch10/classify_pool.py`                                                       | bypass batch classification of the low-confidence pool                             | not migrated                 |
| `scripts/ch10/validate_golden.py`, `prelabel.py`, `corpus_lib.py`, `inference_lib.py` | corpus/prelabel/golden-gate libraries                                              | not migrated                 |
| `app/core/taxonomy.py`                                                                | the authoritative 17-class terminology table                                       | not migrated                 |
| `app/api/topics.py` + `static/topics.html`, `static/topic-questions.html`             | topic distribution pages                                                           | not migrated                 |
| `app/api/acceptance.py` + `static/acceptance*.html/js/css`                            | ch10 acceptance dashboard (9 gate blocks, classifier probe, single-sentence trial) | not migrated                 |
| `app/db/repository.py::topic_distribution/topic_questions`                            | classifier result reads                                                            | not migrated                 |
| jobs `ch10-*`, `classifier-up/down`, `classify-pool[-force]`                          | ch10 page jobs                                                                     | not migrated                 |
| `sql/ch10-ddl.sql`, `data/ch10/**`, `tests/test_ch10_*.py`                            | ch10 schema/artifacts/tests                                                        | not migrated                 |

Consequence accepted: the low-confidence question pool still fills and is still
reviewable (flywheel intact), but there is no per-topic distribution analytics and
no fine-tuned classifier — the ch09 flywheel's "which knowledge to backfill first"
signal is weaker (manual review instead of 17-class counts).

### 1.2 FastAPI static pages → separate SPA (scope decision)

`app/static/*.html|js|css` (chat, admin, kb, rageval, review, observability, topics,
acceptance pages) were **not ported as static pages**. They were reimplemented as a
CSR SPA in `client/` (Lit + `@yukino.js/lit-jsx` + Tailwind v4) covering chat, kb,
admin, rageval, review and observability. The topics/acceptance pages were dropped
with ch10 (§1.1). The server no longer mounts `/static` nor serves `/`, `/admin`,
`/kb`, ... page routes; the SPA owns routing and calls the same `/api/*` surface.

### 1.3 OpenAPI / interactive docs (framework byproduct)

FastAPI auto-served `/openapi.json`, `/docs`, `/redoc`. The Hono server has no
OpenAPI generation. Dev-facing discoverability only; no code consumed it. Not replaced.

### 1.4 Teaching material (not product capability)

- `primer/s1..s9_*.py`, `primer/shop.py` — the book's LangChain primer scripts. Not
  ported 1:1; their demystifying role is kept by `server/scripts/bare-agent-loop.ts`
  (hand-rolled agent loop) and the `smoke-*.ts` scripts.
- `scripts/demo_agent.sh`, `scripts/demo_chat.sh`, `scripts/demo_ch08_promotions.py.txt`,
  `scripts/dev.sh` — replaced by `node server/main.js dev` and the eval scripts.
- `app/core/memory.py::SessionStore` — in-memory session store, already deprecated in
  the Python repo (ch01 teaching relic; persistence moved to the DB). Not ported.

### 1.5 Test-suite shape (honest coverage note)

The Python pytest suite (~55 files incl. `tests/api/`, `tests/core/`, `tests/kb/`,
`tests/graph/`, per-chapter acceptance tests) was **not ported file-for-file**. The TS
suite is `server/tests/*.test.ts` (16 files, 59 cases) plus the offline eval/smoke
scripts, which carry the chapter acceptance role end-to-end. Unit-level coverage of
individual API handlers is thinner in TS than in Python; the `api-contracts.test.ts`
contract tests plus eval scripts are the accepted substitute.

---

## 2. Platform replacements (same capability, different technology)

| Concern                       | Python                                                                         | TypeScript                                                                                                                                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTP framework                | FastAPI + pydantic                                                             | Hono + zod                                                                                                                                                                                                                                                                 |
| Relational DB / ORM           | MySQL 8 + SQLAlchemy (aiomysql)                                                | PostgreSQL + Prisma                                                                                                                                                                                                                                                        |
| DB schema delivery            | `sql/ch*-ddl.sql` + seed SQL                                                   | `server/prisma/migrations/*` + `scripts/seed-conv.ts`                                                                                                                                                                                                                      |
| LangGraph checkpointer        | `AsyncSqliteSaver` (file)                                                      | `PostgresSaver` (`CHECKPOINTER_DB_URL`; DB auto-created, saver owns its tables)                                                                                                                                                                                            |
| Agent stack                   | langchain / langgraph (Python)                                                 | `@langchain/*` / `@langchain/langgraph` (JS)                                                                                                                                                                                                                               |
| Milvus access                 | pymilvus behind a single-thread executor (`acall`, thread-affinity workaround) | official `@zilliz/milvus2-sdk-node`, direct gRPC — no bridge, no thread pinning needed                                                                                                                                                                                     |
| Vector store default          | Milvus always on (`milvus_uri` defaulted to `localhost:19530`)                 | Milvus opt-in via `MILVUS_URI`; empty = legacy in-process store (§7.1). With `MILVUS_URI` set, behaviour matches the Python original (dense ANN + native BM25 Function + hybrid RRF inside Milvus, Strong consistency, authoritative store, down-Milvus surfaces as error) |
| Observability                 | Langfuse Python SDK (OTel under the hood, `run_inline` callback handler)       | Langfuse JS over OTel: `@langfuse/otel` `LangfuseSpanProcessor` + `@langfuse/langchain` `CallbackHandler`, per-turn `recordTurn` generation                                                                                                                                |
| Logging                       | stdlib `logging` → console + `log/app.log`                                     | pino (structured, console)                                                                                                                                                                                                                                                 |
| Job runner                    | Makefile targets, page jobs shell out to `make`                                | `server/main.js` task runner; page jobs (`core/jobs.ts`) spawn whitelisted argv directly (same security boundary: name-only from the front end)                                                                                                                            |
| Background services           | Makefile + `nohup` pid files                                                   | `main.js` SERVICES table (pid/log convention kept) + systemd/docker for Milvus, docker compose for Langfuse                                                                                                                                                                |
| Process supervision of Milvus | root `docker-compose.yml` (mysql+etcd+minio+milvus)                            | `server/deploy/milvus/docker-compose.yml` (fallback) or RPM/DEB systemd unit (preferred), driven by `main.js milvus-up/down`                                                                                                                                               |
| Langfuse stack                | root `docker-compose.langfuse.yml`                                             | `server/deploy/langfuse/docker-compose.yml`, driven by `main.js langfuse-up/down` (§3.6 for port remaps)                                                                                                                                                                   |
| MCP servers                   | `mcp_servers/*.py` (:8101/:8102)                                               | `server/src/mcp-servers/*.ts` (same ports, streamable HTTP)                                                                                                                                                                                                                |
| Front end                     | server-rendered static HTML                                                    | `client/` SPA (Vite, dev proxy `/api` → :8000)                                                                                                                                                                                                                             |
| App port                      | uvicorn :8000                                                                  | :8000 (`PORT`)                                                                                                                                                                                                                                                             |

Wire compatibility is **not** a goal: response shapes are kept close (same field
names, mostly snake_case payloads), but status codes and error bodies differ in the
ways listed in §4.

---

## 3. Deliberate behavioral adaptations

1. **Language: zh → en.** The KB corpus (`server/data/kb/*.md`), all prompts,
   intent labels, enum/status values (`pending_review/approved/rejected`,
   `resolved/dismissed/...`), ticket types, and UI strings are English. Consistent
   across API, DB defaults, prompts and client.
2. **Token calibration.** `zh_chars_per_token=1.2` → `EN_CHARS_PER_TOKEN=4`
   (English chars-per-token). The structural formula (per-message ceil + role/name/
   tool_call_id counting + 3 extra tokens/message) matches langchain-core's
   `count_tokens_approximately` 1:1 (§6 fix 12).
3. **Confidence gate threshold** `0.30` → `0.26` — re-calibrated for the English
   corpus via `scripts/calibrate-confidence.ts` (the calibration artifact, not a guess).
4. **Upstream vendors.** Embeddings/rerank defaults moved SiliconFlow
   (`bge-m3` / `bge-reranker-v2-m3`) → Aliyun-compatible (`qwen3.7-*`); a `dashscope`
   rerank response protocol was added alongside the default `jina` protocol. Chat
   model defaults renamed (`deepseek-v4-flash` → `deepseek-flash`; window lookup still
   resolves any `deepseek-v4*` prefix).
5. **Milvus collection specifics.** Analyzer `chinese` → `standard` (English corpus);
   dense dim hardcoded `1024` → inferred from the first upserted embedding
   (model-agnostic); Strong consistency (matches the always-consistent legacy store);
   category filter expression is string-escaped (the Python `_cat_expr` did not escape).
   A dense-only collection from an older build is rejected with rebuild instructions.
6. **Langfuse compose port remaps** (vs the legacy file): app-facing postgres
   `5432` → `127.0.0.1:5433` (5432 now belongs to the app's own PostgreSQL),
   clickhouse native `9000` → `127.0.0.1:9002` (9000/9001 belong to Milvus MinIO),
   minio console `9091` → `9191` (unchanged from legacy; 9091 is Milvus healthz).
   Init keys rebranded to `pk/sk-lf-yukino-agent2-local` (match `server/.env.example`).
7. **Branding.** MewHelp/喵喵优选/Meow → Yukino Select/Yukino throughout
   (org/project ids, seed users, personas, ticket demo data).

---

## 4. Known accepted differences (not fixed)

1. **Validation error contract.** FastAPI/pydantic returns `422` with a per-field
   `detail` array; Hono+zod handlers return `400` with a single `message` (first zod
   issue). Negative/zero path ids: Python accepted them and returned `404` from the
   lookup; TS returns `400` at parse time. Validation _coverage_ is equivalent
   (all constraints ported). The SPA is built against the 400 contract.
2. **Chat message length guard** moved from a pydantic validator (422) into the
   handler (400). Same limit (`maxUserInputTokens`), same counter.
3. **No OpenAPI surface** (§1.3).
4. **`_CumulativeUsageChatOpenAI` not ported — verified unnecessary.** The Python
   subclass fixed langchain-openai _Python_ summing per-chunk **cumulative** usage.
   `@langchain/openai` (JS) keeps only the **last** reported usage per call and emits
   one usage chunk after the stream (checked against the installed source), so the
   double-count bug does not exist here and the fix would be a no-op.
5. **Job spawn-failure state nuance.** Python: `create_subprocess_exec` raises, the
   `JobRun` keeps its previous state. TS: the `error` handler flips the run to
   `failed` _and_ the POST returns 500 (strictly more informative; both surface the
   failure at button-press time after §6 fix 20).
6. **read-notes typography.** The Chinese-specific tidy rules (full-width comma
   conversion, CJK↔Latin spacing, `「」` stripping, `。` terminator) were replaced by
   English equivalents (`;`→`,`, quote stripping, `.` terminator). The
   language-independent safeguards (max chars, number verification against the
   payload, ≥3-letter de-gluing before digits) are kept 1:1.
7. **Cost ledger rides the deprecated Langfuse v1 metrics endpoint**
   (`GET /api/public/metrics?query=…`, same as the Python SDK's
   `api.legacy.metrics_v1`). The v2 endpoint rejects `traceId` as a grouping
   dimension (high cardinality), which the per-trace dedup needs. Risk accepted:
   the v1 endpoint disappears when a self-hosted Langfuse is upgraded to v4
   (cloud: Nov 16 2026); the ledger script must move to a v2-compatible query then.
8. **`kb-repatch` alignment key.** Python aligned file↔DB chunks by `section_path`
   only; TS aligns by `content_type + section_path + index` (strictly finer; avoids
   cross-file path collisions). Report-only semantics are identical (§6 fix 1).

---

## 5. TS language/runtime limitations that shaped the migration

1. **Promises are not cancellable.** Python wrapped tool calls in `asyncio.wait_for`,
   which cancels the task on timeout. The TS engine races a timeout promise: the turn
   gets the same `timeout` triage status and model feedback, but the underlying
   operation may still complete in the background (a DB write that lands after the
   timeout is possible). Python's cancellation could equally not roll back an
   in-flight DB write, so the _user-visible_ semantics match; the guarantee is weaker
   at the runtime level and is documented as such.
2. **JS `\w` is ASCII-only** even with the `u` flag. Python's `[\s\W_]+` (Unicode
   word semantics) had to be rewritten as `[^\p{L}\p{N}]+` in `kb/dedup.ts` to keep
   CJK and strip invisible format chars identically.
3. **No pydantic-style automatic 422 + per-field errors** in Hono; zod validation is
   explicit per route with a single-message 400 (§4.1).
4. **`@langchain/openai` (JS) ignores the `reasoningEffort` constructor field** and
   gates its call-option to OpenAI reasoning models; the DeepSeek/MiniMax knob had to
   go through `modelKwargs.reasoning_effort` to reach the request body (§6 fix 7).
5. **Langfuse JS SDK has no typed metrics API client**; the cost ledger calls the
   REST endpoint directly (§4.7). `startActiveObservation` has no `asType:"event"`
   overload — `startObservation(..., {asType:"event"})` (auto-ended) is the
   equivalent of Python's `create_event` used by `tagIntent`.
6. **No torch/transformers/onnxruntime training stack** — the root cause of the ch10
   exclusion (§1.1).
7. **No tiktoken-grade tokenizer** in the dependency budget; the approximate
   structural counter is ported instead (§3.2), same as Python used.
8. **`repr()`-based approximations** (Python counted `repr(tool_calls)`) map to
   `JSON.stringify` lengths — same magnitude, not byte-identical; acceptable inside
   an approximation whose per-message rounding dominates.

---

## 6. Migration defects found and fixed (2026-10-06 review)

A full Python-vs-TS capability diff (six parallel deep reviews over core / kb /
graph / tools / api / db / scripts) found the port had introduced the following
**real regressions**. All were fixed in the same pass; they are recorded here so the
migration history is honest about what shipped broken between the migration commit
and this review.

**Critical**

1. `scripts/kb-repatch.ts` auto-inserted new sections and **auto-deleted DB-only
   chunks** (manually ingested rows not protected by the category filter) — Python
   was strictly report-only for both. Now report-only again; only matched bodies are
   updated in place.

**Degradations**

2. `calibrate-confidence.ts` dropped the `E_multi` bucket from the answerable set
   (25% of the eval population excluded from the recommended threshold).
3. `calibrate-confidence.ts` read-note filter was a tautology (all 91 scan points fed
   to the model instead of the 9 deciles).
4. Calibration API lost `in_use_stats` and the tri-state `in_sync`
   (match/conservative/aggressive); the admin card consequently flagged _any_
   mismatch (incl. deliberately conservative setups) as attention. Restored
   end-to-end (API + admin + client KPI display).
5. `cost-report.ts` POSTed to `/api/public/metrics` — an endpoint that does not
   exist (Langfuse serves GET there) — so the cost ledger could never have worked.
   Now GET with urlencoded `query`, matching the Python SDK's v1 call.
6. No Langfuse bring-up (`langfuse-up/down` + compose file) existed. Vendored
   `server/deploy/langfuse/docker-compose.yml` and added both commands.
7. `core/llm.ts` set `reasoningEffort` on the JS `ChatOpenAI` constructor, which
   never reads it — `CHAT_REASONING_EFFORT` was silently dead. Now sent via
   `modelKwargs.reasoning_effort`; invalid values warn instead of being dropped.
8. `tools/engine.ts` exempted **write** tools from the timeout entirely (a stalled
   write hung the whole turn; the write-timeout acceptance demo was dead). Writes now
   get the timeout (retries stay 0), matching Python's `asyncio.wait_for` wrap.
9. `tools/engine.ts` final-failure audit recorded only the error _class_; Python
   recorded `Type: message` and logged the traceback. Restored (incl. the
   schema-crash branch and the do-not-fabricate triage wording for business errors).
10. Intent was never tagged onto the **live** graph trace (only a post-hoc synthetic
    `recordTurn` generation carried it), so per-intent filtering of the real
    generations was lost. Added `observability.tagIntent` (event observation inside
    `propagateAttributes`, mirroring Python's `tag_intent`) called from
    `classifyIntent`.
11. `main.js` was missing every Makefile-registered task without a direct name twin
    (`eval-check`, `flywheel-samples`, `eval-agent`, `eval-mining`, `smoke-interrupt`,
    `smoke-rag`, plus all remaining eval/smoke scripts). Runner now covers all scripts.
12. `core/memory.ts` token counter omitted `tool_call_id`/role/name and used a global
    floor instead of per-message ceil(+3) — systematically optimistic vs the Python
    formula. Aligned with `count_tokens_approximately` semantics.
13. `core/memory.ts` `trimHistory` skipped the start-on-human trim when everything
    fit the budget; langchain-core applies it in that branch too. Aligned.
14. `core/rerank.ts` parsed a 200 response missing `results` as `[]` (silently
    degrading `hybrid_rerank` to "no evidence"); Python raised. Now throws; string
    scores coerce like Python's `float()`.
15. `core/retrieval.ts` fired all clause sub-searches concurrently (burst against the
    per-second rerank rate limit); Python awaited them sequentially. Sequential again.
16. `core/retrieval.ts` round-robin merge ignored empty `section_path` for
    same-section demotion; Python tracked `""`. Aligned.
17. `kb/chunking.ts` `splitSections` had no code-fence awareness (a `#` line inside a
    fenced code block, ` ``` ` or `~~~`, created a phantom section) and rejected
    indented/bare headers; aligned with `MarkdownHeaderTextSplitter` semantics.
18. `kb/dedup.ts` strip set kept Unicode format chars (e.g. U+200B) that Python
    stripped, letting near-identical mined questions escape dedup. Aligned (§5.2).
19. `core/read-notes.ts` `tidy()` lacked the ≥3-letter de-gluing rule, reopening the
    documented `verify()` blind spot for glued fabricated numbers ("tokens8821").
20. `core/jobs.ts` spawn failures (ENOENT) surfaced asynchronously — the POST
    answered 200 "running" and flipped to failed on the next poll; Python answered
    500 at button-press. `start()` now awaits the spawn/error outcome and throws.
21. `api/schemas.ts` made `order_id` a required (nullable) field in the extract
    function-calling schema; Python's `default=None` let the model omit it. Added
    `.default(null)` — an omitted field no longer 502s.
22. `scripts/eval-judge.ts` double-stringified the citations JSON string, so the
    judge regression **always replayed with empty evidence**, and a stored `"[]"`
    snapshot passed the gradable filter. Both fixed (direct `parseJson`, parse before
    filtering).
23. `scripts/eval-flywheel.ts` ran ~240 retrieval + ~60 refusal calls unbounded;
    Python capped both at 5 (via `eval_ch04`'s semaphores). Caps restored.
24. `scripts/kb-preview.ts` omitted the historical-conversation material section and
    the sentence-overlap note from the materials list. Restored.
25. `scripts/smoke-interrupt.ts` seeded the graph with an `AIMessage` instead of a
    human turn, weakening the red-line smoke's fidelity. Fixed.

**Verified as non-issues during the review** (no change needed): graph node set /
edges / interrupt surfaces, ReAct loop caps, stream frame vocabulary, tool registry
& MCP client semantics, builtin tool business rules, dual-write consistency checks,
flywheel pool→extract→review pipeline, repository function parity (atomic
consolidations verified equivalent), DB schema/column parity for all 12 non-ch10
tables, startup/lifespan behaviour, budget formulas & window table, rerank request
shape/retry policy, chunking separators & table splitting.

---

## 7. TS-side additions (no Python counterpart — not gaps)

1. **Legacy in-process vector store** (`server/src/kb/store.ts`): with `MILVUS_URI`
   empty, dense cosine + BM25 (k1=1.5, b=0.75, CJK-bigram-aware tokenizer) + RRF
   (k=60) run in-process over the relational DB, so all four retrieval strategies
   work without a vector database. The Python original had no such mode (Milvus was
   always on). `KnowledgeChunk.embedding/embeddingModel` columns exist for this mode.
2. **`milvus-up/down` as page jobs** (Python: Makefile-only) driving systemd or the
   vendored compose, with healthz gating; Milvus install via RPM/DEB is preferred
   over docker.
3. **`langfuse-up/down` in `main.js`** with healthz wait and printed `.env` keys
   (Python: Makefile-only, no wait).
4. **`dashscope` rerank protocol** option next to the default jina-shaped one.
5. Hardening extras: required-config validation + API-key check at startup, DB
   readiness assertion before serving, conversation-existence 404 precheck in
   `/api/actions/*`, escaped Milvus category filter, per-file idempotency in
   `kb-build` (stricter than Python's), `kb-repatch` contentType-aware alignment,
   vector "done" marked only after the end-of-run flush.
6. `GET /api/admin/jobs` (extra convenience endpoint) and `smoke-bm25.ts` /
   `smoke-milvus.ts` split (superset of Python's `smoke_milvus_bm25.py`).

---

## 8. Mapping tables

### 8.1 Scripts (Makefile target → `node server/main.js <cmd>`)

| Python                                                                                                   | TS                                                  | Runner command                            |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------- |
| `show_kb.py`                                                                                             | `scripts/kb-preview.ts`                             | `kb-preview`                              |
| `build_kb.py`                                                                                            | `scripts/kb-build.ts`                               | `kb-build`                                |
| `vectorize_kb.py`                                                                                        | `scripts/kb-vectorize.ts`                           | `kb-vectorize`                            |
| `kb_repatch.py`                                                                                          | `scripts/kb-repatch.ts`                             | `kb-repatch`                              |
| `mine_knowledge.py`                                                                                      | `scripts/kb-mine.ts`                                | `kb-mine`                                 |
| (make `kb-reset` inline)                                                                                 | `scripts/kb-reset.ts`                               | `kb-reset`                                |
| (sql/ch03-seed.sql)                                                                                      | `scripts/seed-conv.ts`                              | `seed-conv`                               |
| `eval_ch04.py`                                                                                           | `scripts/eval-rag.ts`                               | `eval-rag`                                |
| `validate_eval_ch04.py`                                                                                  | `scripts/validate-eval-rag.ts`                      | `eval-check`                              |
| `eval_retrieval.py`                                                                                      | `scripts/eval-retrieval.ts`                         | `eval-retrieval`                          |
| `judge_check.py`                                                                                         | `scripts/eval-judge.ts`                             | `eval-judge`                              |
| `eval_extract.py`                                                                                        | `scripts/eval-extract.ts`                           | `eval-extract`                            |
| `eval_ch05.py`                                                                                           | `scripts/eval-workflow.ts`                          | `eval-workflow`                           |
| `eval_ch06.py`                                                                                           | `scripts/eval-intent.ts`                            | `eval-intent`                             |
| `eval_intent.py`                                                                                         | `scripts/eval-intent2.ts`                           | `eval-intent2`                            |
| `eval_ch07.py`                                                                                           | `scripts/eval-context.ts`                           | `eval-context`                            |
| `eval_ch08.py`                                                                                           | `scripts/eval-mcp.ts`                               | `eval-mcp`                                |
| `eval_agent.py`                                                                                          | `scripts/eval-agent.ts`                             | `eval-agent`                              |
| `eval_coref.py`                                                                                          | `scripts/eval-coref.ts`                             | `eval-coref`                              |
| `eval_expand.py`                                                                                         | `scripts/eval-expand.ts`                            | `eval-expand`                             |
| `eval_mining.py`                                                                                         | `scripts/eval-mining.ts`                            | `eval-mining`                             |
| `flywheel_pipeline.py`                                                                                   | `scripts/flywheel.ts`                               | `flywheel`                                |
| `validate_flywheel_samples.py`                                                                           | `scripts/validate-flywheel-samples.ts`              | `flywheel-samples`                        |
| `eval_flywheel.py`                                                                                       | `scripts/eval-flywheel.ts`                          | `eval-flywheel`                           |
| `cost_by_intent.py`                                                                                      | `scripts/cost-report.ts`                            | `cost-report`                             |
| `calibrate_confidence.py`                                                                                | `scripts/calibrate-confidence.ts`                   | `calibrate-confidence`                    |
| `bare_agent_loop.py`                                                                                     | `scripts/bare-agent-loop.ts`                        | `bare-agent-loop`                         |
| `smoke_embed.py` / `smoke_toolcall.py` / `smoke_langgraph.py` / `smoke_interrupt.py` / `smoke_rerank.py` | `scripts/smoke-*.ts` (same names, dashed)           | `smoke-*`                                 |
| `smoke_milvus_bm25.py`                                                                                   | `scripts/smoke-milvus.ts` + `scripts/smoke-bm25.ts` | `smoke-milvus`, `smoke-bm25`, `smoke-rag` |
| `scripts/ch10/*`                                                                                         | —                                                   | not migrated (§1.1)                       |

### 8.2 App modules

`app/api/*.py` → `server/src/api/*.ts` (1:1 except `topics`/`acceptance`, §1.1);
`app/core/*.py` → `server/src/core/*.ts` (1:1 except `taxonomy`, §1.1);
`app/kb/*.py` → `server/src/kb/*.ts` (`milvus_client.py` → `milvus.ts`, plus new
`store.ts` §7.1); `app/graph/*.py` → `server/src/graph/*.ts`;
`app/tools/**` → `server/src/tools/**`; `app/db/{base,models,repository}.py` →
`server/src/db/{client,json,repository}.ts` + `prisma/schema.prisma`;
`app/main.py` → `server/src/{index,server}.ts`; `app/schemas/*.py` →
`server/src/api/schemas.ts`; `mcp_servers/*.py` → `server/src/mcp-servers/*.ts`;
`data/kb/*.md` → `server/data/kb/*.md` (translated); `data/ch09/reports/*` →
`server/data/observability/reports/*` (regenerated by the TS jobs).

---

## Verification status (at the time of this record)

`pnpm lint` (0 errors) · `pnpm typecheck` (server + client) · `pnpm test` (59/59) ·
`pnpm build` (client) · `docker compose config` (both vendored compose files) ·
`node server/main.js help` (all commands registered) — all green. Runtime smokes
covered: `tagIntent` no-op without Langfuse, code-fence chunking, start-on-human
trim, zero-width-space dedup. Fixes touching live upstreams (Langfuse metrics GET,
rerank loud-failure path, write-timeout demo via `DEMO_TICKET_DELAY_SECONDS`) are
code-verified and unit-tested where possible but have **not** been exercised against
real Langfuse/rerank/ticket deployments from this machine.
