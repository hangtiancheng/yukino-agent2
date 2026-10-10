import { LitElement } from "@yukino.js/lit-jsx";

export class LightElement extends LitElement {
  protected override createRenderRoot(): HTMLElement {
    return this;
  }
}
