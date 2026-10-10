import { Router, type RouteConfig } from "@lit-labs/router";
import { customElement } from "@yukino.js/lit-jsx";

import "~/routes/admin";
import "~/routes/chat";
import "~/routes/kb";
import "~/routes/not-found";
import "~/routes/observability";
import "~/routes/rageval";
import "~/routes/review";
import { LightElement } from "~/lib/light-element";
import { setRouter } from "~/lib/router";

const routes: RouteConfig[] = [
  { path: "/", render: () => <chat-page /> },
  { path: "/admin", render: () => <admin-page /> },
  { path: "/kb", render: () => <kb-page /> },
  { path: "/rag-eval", render: () => <rageval-page /> },
  { path: "/review", render: () => <review-page search={location.search} /> },
  { path: "/observability", render: () => <observability-page /> },
];

@customElement("app-shell")
export class AppShell extends LightElement {
  private router = new Router(this, routes, {
    fallback: { render: () => <not-found-page /> },
  });

  override connectedCallback(): void {
    super.connectedCallback();
    setRouter(this.router);
  }

  protected override render() {
    return this.router.outlet();
  }
}
