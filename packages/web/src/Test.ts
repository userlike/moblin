import "./Flex";
import "./FlexItem";

import type { ContentPosition } from "@moblin/core";
import { html,LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("x-test")
export class Test extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: "closed",
    delegatesFocus: true,
  };
  render() {
    return html`
      <div>
        <slot />
      </div>
    `;
  }
}

@customElement("x-test-2")
export class Test2 extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: "closed",
    delegatesFocus: true,
  };
  render() {
    return html`
      <x-test>
        <slot />
      </x-test>
    `;
  }
}
