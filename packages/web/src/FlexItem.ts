import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { AlignSelf } from "@moblin/core";

@customElement("x-flex-item")
export class FlexItem extends LitElement {
  @property({ attribute: "align-self" })
  alignSelf?: AlignSelf;

  @property()
  grow?: number;

  @property()
  shrink: number = 1;

  @property()
  basis?: string = "auto";

  render() {
    const shrinkCls = this.shrink > 0 ? "shrink" : "";

    return html`
      <div class="root ${shrinkCls}">
        <slot />
      </div>
      <style>
        .root {
          flex-grow: ${this.grow !== undefined
            ? this.grow
            : "var(--pcss-flex-child-grow)"};
          flex-shrink: ${this.shrink};
          flex-basis: ${this.basis};
          justify-content: ${this.alignSelf ?? "var(--pcss-flex-align-items)"};
        }

        ::slotted(*) {
          --pcss-flex-grandchild-grow: ${this.alignSelf === "stretch"
            ? "1"
            : this.alignSelf !== undefined
            ? "0"
            : "inherit"};
        }
      </style>
    `;
  }

  static styles = css`
    .root {
      display: flex;
      overflow: visible;
      align-items: stretch;
      flex-direction: var(--pcss-flex-child-direction);
      min-width: auto;
      min-height: auto;
      margin-left: var(--pcss-flex-gap-x);
      margin-top: var(--pcss-flex-gap-y);
    }

    .root.shrink {
      min-width: var(--pcss-flex-child-shrink-width);
      min-height: var(--pcss-flex-child-shrink-height);
    }

    ::slotted(*) {
      flex-grow: var(--pcss-flex-grandchild-grow);
      flex-shrink: 1;
      flex-basis: auto;
      min-width: var(--pcss-flex-grandchild-shrink-width);
      min-height: var(--pcss-flex-grandchild-shrink-height);
    }
  `;
}
