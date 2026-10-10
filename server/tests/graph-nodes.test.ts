import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SCRIPT_REPLY_CHITCHAT, SCRIPT_REPLY_OTHER } from "#/core/prompts.ts";
import {
  COMPLAINT_REPLY,
  FALLBACK_REPLY,
  complaintReply,
  fallbackReply,
  resolveAnswer,
  scriptReply,
} from "#/graph/nodes.ts";
import type { GraphState } from "#/graph/state.ts";

const mocks = vi.hoisted(() => ({
  insertLowConfidence: vi.fn(),
}));

vi.mock("#/db/repository.ts", () => ({
  insertLowConfidence: mocks.insertLowConfidence,
}));

function state(overrides: Partial<GraphState> = {}): GraphState {
  return {
    messages: [new HumanMessage("how do I delete my account")],
    summary: "",
    summaryUptoMsgId: 0,
    layer1FromMsgId: 0,
    userId: "u1",
    conversationId: 3,
    intent: "",
    resolvedQuery: "",
    intentConfidence: 0,
    orderId: "",
    orderData: {},
    route: "",
    evidence: "",
    citations: [],
    evidenceStrong: false,
    evidenceConfidence: 0,
    fallbackSource: "",
    retrievedSnapshot: [],
    answer: "",
    steps: 0,
    tokensUsed: 0,
    suggestedActions: [],
    trace: {},
    ...overrides,
  };
}

beforeEach(() => {
  mocks.insertLowConfidence.mockReset();
  mocks.insertLowConfidence.mockResolvedValue(1);
});

describe("fallback_reply low-confidence pooling", () => {
  it("persists the retrieved snapshot when retrieval hit something", async () => {
    const snapshot = [
      {
        question: "x",
        answer: "y",
        rerank_score: 0.4,
        section_path: "s",
      },
    ];
    const out = await fallbackReply(
      state({
        fallbackSource: "self_check",
        evidenceConfidence: 0.41,
        retrievedSnapshot: snapshot,
      }),
    );
    const call = mocks.insertLowConfidence.mock.calls[0];
    expect(call[2]).toBe("self_check");
    expect(call[4]).toEqual(snapshot);
    expect(call[3]).toContain("0.410");
    expect(out.answer).toBe(FALLBACK_REPLY);
    expect(out.suggestedActions).toEqual([{ type: "transfer_human" }]);
    expect(out.trace).toEqual({ route: "fallback" });
  });

  it("stores [] (not null) when retrieval ran but hit nothing", async () => {
    await fallbackReply(
      state({ fallbackSource: "retrieval_low_conf", retrievedSnapshot: [] }),
    );
    const call = mocks.insertLowConfidence.mock.calls[0];
    expect(call[2]).toBe("retrieval_low_conf");
    expect(call[4]).toEqual([]);
  });

  it("stores null when retrieval never ran (no fallback source)", async () => {
    // Tri-state semantics: the entry-reset snapshot is [], and an empty array is
    // truthy — a `??`-style port would persist [] here and the review page would
    // wrongly claim "retrieved, zero hits" for a non-knowledge-route fallback.
    await fallbackReply(state({ retrievedSnapshot: [] }));
    const call = mocks.insertLowConfidence.mock.calls[0];
    expect(call[2]).toBe("retrieval_low_conf");
    expect(call[4]).toBeNull();
  });

  it("defaults the source and survives a missing snapshot channel", async () => {
    await fallbackReply(state());
    const call = mocks.insertLowConfidence.mock.calls[0];
    expect(call[2]).toBe("retrieval_low_conf");
    expect(call[4]).toBeNull();
  });
});

describe("deterministic reply nodes", () => {
  it("script_reply picks the per-intent script", () => {
    expect(scriptReply(state({ intent: "chitchat" })).answer).toBe(
      SCRIPT_REPLY_CHITCHAT,
    );
    const other = scriptReply(state({ intent: "other" }));
    expect(other.answer).toBe(SCRIPT_REPLY_OTHER);
    expect(other.trace).toEqual({ route: "fallback_script" });
    expect(other.suggestedActions).toBeUndefined();
  });

  it("complaint_reply offers transfer + ticket with a draft", () => {
    const out = complaintReply(
      state({ messages: [new HumanMessage("I want to complain")] }),
    );
    expect(out.answer).toBe(COMPLAINT_REPLY);
    const actions = out.suggestedActions ?? [];
    expect(actions.map((a) => a.type)).toEqual([
      "transfer_human",
      "create_ticket",
    ]);
    expect(actions[1].draft).toEqual({
      description: "I want to complain",
      ticket_type: "complaint",
    });
    expect(out.trace).toEqual({ route: "complaint" });
  });
});

describe("resolve_answer", () => {
  it("prefers the explicit deterministic answer", () => {
    expect(resolveAnswer(state({ answer: "fixed script" }))).toBe(
      "fixed script",
    );
  });

  it("falls back to the last AI message text", () => {
    const s = state({
      messages: [new HumanMessage("hi"), new AIMessage("model reply")],
    });
    expect(resolveAnswer(s)).toBe("model reply");
  });
});
