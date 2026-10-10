import { cn } from "./cn";

const NUM_RE = /(?<![A-Za-z@_.\-\d])\d+(?:,\d{3})*(?:\.\d+)?%?(?![A-Za-z_])/g;

function boldNumbers(s: string): unknown[] {
  const parts: unknown[] = [];
  let last = 0;
  NUM_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = NUM_RE.exec(s)) !== null) {
    if (m.index > last) {
      parts.push(s.slice(last, m.index));
    }
    parts.push(<b>{m[0]}</b>);
    last = m.index + m[0].length;
  }
  if (last < s.length) {
    parts.push(s.slice(last));
  }
  return parts;
}

export interface ReadNoteProps {
  note?: string | null;
  fallback: unknown;
  class?: string;
}

export function ReadNote({ note, fallback, class: cls }: ReadNoteProps) {
  return (
    <div
      class={cn(
        "bg-secondary-container text-on-secondary-container text-body-small mt-3 rounded-lg px-4 py-3 leading-relaxed [&_b]:font-semibold",
        cls,
      )}
    >
      <span class="bg-primary text-on-primary mr-2 inline-block rounded-full px-2.5 py-0.5 align-middle text-[11px] font-medium">
        Insight
      </span>
      {note ? boldNumbers(note) : fallback}
    </div>
  );
}
