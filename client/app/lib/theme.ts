export type Theme = "light" | "dark";

const KEY = "yukino_agent2_theme";
const listeners = new Set<() => void>();

export function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function emit(): void {
  for (const l of listeners) {
    l();
  }
}

export function setTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // private mode / blocked storage: keep the in-memory theme only
  }
  emit();
}

export function toggleTheme(): void {
  setTheme(currentTheme() === "dark" ? "light" : "dark");
}

export function subscribeTheme(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
