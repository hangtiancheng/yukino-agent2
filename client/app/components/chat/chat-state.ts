import type { ActionItem, Citation, InterruptFrame } from "~/lib/types";

export const SESSION_KEY = "yukino_agent2_session_id";
export const CONV_KEY = "yukino_agent2_conversation_id";

export const SUGGESTIONS = [
  "What is the return & exchange policy?",
  "How do I track my order?",
  "How do I choose cat food?",
  "What membership benefits are there?",
];

export const REPLAY_ACTIONS: { text: string; actions: ActionItem[] }[] = [
  {
    text: "Sorry, I couldn't find definitive information on this question for now, so I don't dare answer blindly. We suggest contacting human customer service to confirm further, so you don't get wrong guidance.",
    actions: [{ type: "transfer_human" }],
  },
  {
    text: "We're very sorry for the bad experience, and we understand how you feel. You can choose to be transferred to human customer service, or let me register a ticket to follow up for you.",
    actions: [{ type: "transfer_human" }, { type: "create_ticket", draft: {} }],
  },
];

export interface UserMsg {
  id: number;
  role: "user";
  text: string;
}

export interface BotMsg {
  id: number;
  role: "bot";
  raw: string;
  tools: string[];
  citations: Citation[];
  actions: ActionItem[];
  interrupt?: InterruptFrame;
  error?: string;
  streaming: boolean;
  feedback?: "up" | "down";
  decided?: boolean;
  acted?: boolean;
  plain?: boolean;
}

export type Msg = UserMsg | BotMsg;

export function getUserId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}
