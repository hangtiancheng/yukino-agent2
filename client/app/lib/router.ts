import type { Router } from "@lit-labs/router";

let activeRouter: Router | null = null;

export function setRouter(router: Router): void {
  activeRouter = router;
}

export function navigate(url: string): void {
  const u = new URL(url, location.href);
  if (u.href === location.href) {
    return;
  }
  history.pushState({}, "", u.href);
  void activeRouter?.goto(u.pathname);
}

export function setPageTitle(title: string): void {
  document.title = title;
}
