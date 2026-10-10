export async function api<T>(path: string, opts?: RequestInit): Promise<T> {
  const r = await fetch(path, opts);
  const body: unknown = await r.json().catch(() => ({}));
  if (!r.ok) {
    let detail: string | undefined;
    if (typeof body === "object" && body !== null && "detail" in body) {
      detail = String(body.detail);
    }
    throw new Error(detail ?? `HTTP ${r.status}`);
  }
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- see above
  return body as T;
}

export function jsonPost(payload?: unknown): RequestInit {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload === undefined ? undefined : JSON.stringify(payload),
  };
}

export function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}
