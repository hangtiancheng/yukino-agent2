import { DotLottie } from "@lottiefiles/dotlottie-web";
import "./app.css";
import "~/components/app-shell";
import "~/components/toast";
import { createRoot, html } from "@yukino.js/lit-jsx";

DotLottie.setWasmUrl("/wasm/dotlottie-player.wasm");
void DotLottie.preload();

const container = document.getElementById("app") ?? document.body;
container.replaceChildren();
const root = createRoot(container);
root.render(html`<app-shell></app-shell>`);

document.body.appendChild(document.createElement("toast-host"));
