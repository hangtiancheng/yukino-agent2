import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const HEADERS: [string, string][] = [
  ["#", "h1"],
  ["##", "h2"],
  ["###", "h3"],
  ["####", "h4"],
];
const TEXT_SEPARATORS = [
  "\n\n",
  "\n",
  "。",
  "！",
  "？",
  "；",
  "!",
  "?",
  ";",
  "，",
  " ",
  "",
];

export interface MarkdownSection {
  pageContent: string;
  metadata: Record<string, string>;
}

const HEADER_RE = /^(#{1,4})(?:\s+(.*))?$/;

export function splitSections(md: string): MarkdownSection[] {
  const sections: MarkdownSection[] = [];
  const stack: Record<string, string> = {};
  let buffer: string[] = [];
  let started = false;
  let inCodeBlock = false;
  let openingFence = "";
  const flush = (): void => {
    sections.push({
      pageContent: buffer.join("\n").trim(),
      metadata: { ...stack },
    });
    buffer = [];
  };
  for (const line of md.split("\n")) {
    const stripped = line.trim();
    if (!inCodeBlock) {
      if (
        stripped.startsWith("```") &&
        stripped.split("```").length - 1 === 1
      ) {
        inCodeBlock = true;
        openingFence = "```";
      } else if (stripped.startsWith("~~~")) {
        inCodeBlock = true;
        openingFence = "~~~";
      }
    } else if (stripped.startsWith(openingFence)) {
      inCodeBlock = false;
      openingFence = "";
    }
    const m = inCodeBlock ? null : HEADER_RE.exec(stripped);
    if (m) {
      if (started || buffer.join("").trim()) {
        flush();
      }
      const level = m[1].length;
      for (let l = level; l <= HEADERS.length; l += 1) {
        Reflect.deleteProperty(stack, `h${l}`);
      }
      stack[`h${level}`] = (m[2] ?? "").trim();
      started = true;
      continue;
    }
    buffer.push(line);
  }
  flush();
  return sections;
}

export async function recursiveSplit(
  text: string,
  chunkSize: number,
  chunkOverlap = 0,
): Promise<string[]> {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize,
    chunkOverlap,
    separators: TEXT_SEPARATORS,
    keepSeparator: true,
  });
  return splitter.splitText(text);
}

const SENT_RE = /[^.。！？!?…\n]*[.。！？!?…\n]\s*|[^.。！？!?…\n]+$/g;

function splitSentences(text: string): string[] {
  return text.match(SENT_RE) ?? [];
}

function trailingSentences(text: string, maxChars: number): string {
  const out: string[] = [];
  let total = 0;
  for (const s of splitSentences(text).reverse()) {
    if (out.length > 0 && total + s.length > maxChars) {
      break;
    }
    out.unshift(s);
    total += s.length;
  }
  return out.join("");
}

export function applySentenceOverlap(
  chunks: string[],
  overlap: number,
): string[] {
  if (chunks.length === 0) {
    return [];
  }
  const out = [chunks[0]];
  for (let i = 1; i < chunks.length; i += 1) {
    const ov = trailingSentences(chunks[i - 1], overlap);
    out.push(ov ? ov + chunks[i] : chunks[i]);
  }
  return out;
}

const TABLE_SEP_RE = /^\s*\|?[\s:|-]+\|?\s*$/;

function findTableHeader(lines: string[]): number {
  for (let i = 0; i < lines.length - 1; i += 1) {
    const line = lines[i];
    const next = lines[i + 1];
    if (
      line.trimStart().startsWith("|") &&
      TABLE_SEP_RE.test(next) &&
      next.includes("-")
    ) {
      return i;
    }
  }
  return -1;
}

export function isTableBlock(text: string): boolean {
  const lines = text
    .trim()
    .split("\n")
    .filter((ln) => ln.trim() !== "");
  return findTableHeader(lines) !== -1;
}

export function splitTableRows(tableMd: string, maxRows: number): string[] {
  const lines = tableMd
    .trim()
    .split("\n")
    .filter((ln) => ln.trim() !== "");
  const idx = findTableHeader(lines);
  if (idx === -1) {
    return [tableMd.trim()];
  }
  const preamble = lines.slice(0, idx);
  const header = lines[idx];
  const sep = lines[idx + 1];
  const rows = lines.slice(idx + 2);
  if (rows.length <= maxRows) {
    return [tableMd.trim()];
  }
  const out: string[] = [];
  for (let j = 0; j * maxRows < rows.length; j += 1) {
    const group = rows.slice(j * maxRows, (j + 1) * maxRows);
    const block =
      j === 0 ? [...preamble, header, sep, ...group] : [header, sep, ...group];
    out.push(block.join("\n"));
  }
  return out;
}
