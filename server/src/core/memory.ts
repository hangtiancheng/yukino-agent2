import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  ToolMessage,
} from "@langchain/core/messages";
import type { BaseMessage } from "@langchain/core/messages";

import * as budget from "./budget.ts";

import { settings } from "#/config.ts";

export function contentToString(content: BaseMessage["content"]): string {
  if (typeof content === "string") {
    return content;
  }
  const parts: string[] = [];
  for (const part of content) {
    if (typeof part === "string") {
      parts.push(part);
    } else if (
      typeof part === "object" &&
      part !== null &&
      "type" in part &&
      part.type === "text" &&
      "text" in part &&
      typeof part.text === "string"
    ) {
      parts.push(part.text);
    }
  }
  return parts.join("");
}

export function countTokens(messages: BaseMessage[]): number {
  const cpt = settings.enCharsPerToken;
  let total = 0;
  for (const m of messages) {
    let chars = contentToString(m.content).length;
    if (AIMessage.isInstance(m) && m.tool_calls && m.tool_calls.length > 0) {
      chars += JSON.stringify(m.tool_calls).length;
    }
    if (ToolMessage.isInstance(m)) {
      chars += m.tool_call_id.length;
    }
    chars += openAiRole(m).length;
    if (m.name) {
      chars += m.name.length;
    }
    total += Math.ceil(chars / cpt) + 3;
  }
  return Math.ceil(total);
}

function openAiRole(m: BaseMessage): string {
  if (AIMessage.isInstance(m)) {
    return "assistant";
  }
  if (HumanMessage.isInstance(m)) {
    return "user";
  }
  if (ToolMessage.isInstance(m)) {
    return "tool";
  }
  if (SystemMessage.isInstance(m)) {
    return "system";
  }
  return m.type;
}

export function charsToTokens(nChars: number): number {
  return Math.floor(nChars / settings.enCharsPerToken);
}

export function tokensToChars(nTokens: number): number {
  return Math.floor(nTokens * settings.enCharsPerToken);
}

export function windowBudget(): number {
  if (settings.contextWindowMaxTokens > 0) {
    return settings.contextWindowMaxTokens;
  }
  return budget.compute().sliding;
}

export function trimHistory(
  messages: BaseMessage[],
  maxTokens: number,
): BaseMessage[] {
  const out = [...messages];
  while (out.length > 0 && countTokens(out) > maxTokens) {
    out.shift();
  }
  while (out.length > 0 && !HumanMessage.isInstance(out[0])) {
    out.shift();
  }
  return out;
}

const DB_ID_PREFIX = "db-";

function dbMsgId(m: BaseMessage): number | null {
  const id = m.id;
  if (typeof id === "string" && id.startsWith(DB_ID_PREFIX)) {
    const parsed = Number.parseInt(id.slice(DB_ID_PREFIX.length), 10);
    return Number.isNaN(parsed) ? null : parsed;
  }
  return null;
}

function indexAfter(messages: BaseMessage[], msgId: number): number {
  if (!msgId) {
    return 0;
  }
  for (let i = 0; i < messages.length; i += 1) {
    const m = messages[i];
    if (HumanMessage.isInstance(m)) {
      const did = dbMsgId(m);
      if (did !== null && did > msgId) {
        return i;
      }
    }
  }
  return 0;
}

export function buildWindow(
  messages: BaseMessage[],
  summaryUptoMsgId: number,
  layer1FromMsgId = 0,
  maxTokens: number | null = null,
): BaseMessage[] {
  let window = messages.slice(indexAfter(messages, summaryUptoMsgId));
  if (layer1FromMsgId) {
    const split = indexAfter(window, layer1FromMsgId);
    if (split) {
      window = [...toLayer2(window.slice(0, split)), ...window.slice(split)];
    }
  }
  const trimmed = trimHistory(window, maxTokens ?? windowBudget());
  return trimmed.length > 0 ? trimmed : window;
}

export function layerTokens(
  messages: BaseMessage[],
  summaryUptoMsgId: number,
  layer1FromMsgId: number,
): [number, number] {
  const window = messages.slice(indexAfter(messages, summaryUptoMsgId));
  const split = layer1FromMsgId ? indexAfter(window, layer1FromMsgId) : 0;
  return [
    countTokens(toLayer2(window.slice(0, split))),
    countTokens(window.slice(split)),
  ];
}

export function nextLayer1From(
  messages: BaseMessage[],
  summaryUptoMsgId: number,
  layer1Budget: number,
): number {
  const window = messages.slice(indexAfter(messages, summaryUptoMsgId));
  let total = 0;
  for (let i = window.length - 1; i >= 0; i -= 1) {
    total += countTokens([window[i]]);
    if (total > layer1Budget) {
      for (let j = i; j >= 0; j -= 1) {
        const did = dbMsgId(window[j]);
        if (did !== null) {
          return did;
        }
      }
      return 0;
    }
  }
  return 0;
}

export function summaryLine(summary: string | null): string {
  return summary ? `(Summary of earlier conversation: ${summary})` : "";
}

export function summarySystem(summary: string | null): SystemMessage | null {
  if (!summary) {
    return null;
  }
  return new SystemMessage(
    `## Summary of earlier conversation (earlier turns are compressed; the facts in it are trustworthy)\n${summary}`,
  );
}

export function compressReply(
  text: string,
  keepChars: number | null = null,
): string {
  const n = keepChars ?? settings.layer2ReplyKeepChars;
  if (!text || text.length <= n) {
    return text;
  }
  return `${text.slice(0, n)}… (truncated)`;
}

export function compressToolResult(name: string, content: string): string {
  if (!content) {
    return content;
  }
  if (charsToTokens(content.length) <= settings.layer2ToolKeepTokens) {
    return content;
  }
  return `(Called ${name || "tool"}; result omitted)`;
}

export function toLayer2(messages: BaseMessage[]): BaseMessage[] {
  const out: BaseMessage[] = [];
  for (const m of messages) {
    if (HumanMessage.isInstance(m)) {
      out.push(m);
    } else if (AIMessage.isInstance(m)) {
      const text = contentToString(m.content);
      out.push(
        new AIMessage({
          content: compressReply(text),
          ...(m.id !== undefined ? { id: m.id } : {}),
          tool_calls: (m.tool_calls ?? []).map((tc) => ({ ...tc })),
        }),
      );
    } else if (ToolMessage.isInstance(m)) {
      const text = contentToString(m.content);
      out.push(
        new ToolMessage({
          content: compressToolResult(m.name ?? "", text),
          tool_call_id: m.tool_call_id,
          ...(m.name !== undefined ? { name: m.name } : {}),
          ...(m.id !== undefined ? { id: m.id } : {}),
        }),
      );
    } else {
      out.push(m);
    }
  }
  return out;
}
