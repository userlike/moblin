import "./Flex";
import "./FlexItem";

import type { ContentPosition } from "@moblin/core";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("x-box")
export class Box extends LitElement {
  @property()
  valign: ContentPosition = "stretch";

  @property()
  halign: ContentPosition = "stretch";

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <x-flex
        direction="column"
        justify-content="${this.valign}"
        align-items="${this.halign}"
        style=${styleMap({
          width: "100%",
          height: "100%",
        })}
      >
        <x-flex-item>
          <slot />
        </x-flex-item>
      </x-flex>
    `;
  }
}
