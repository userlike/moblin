import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { AlignContent, AlignItems, JustifyContent } from "@moblin/core";

@customElement("x-flex")
export class Flex extends LitElement {
  @property()
  direction: "row" | "column";

  @property()
  gap: string = "0px";

  @property({ attribute: "gap-x" })
  gapX?: string;

  @property({ attribute: "gap-y" })
  gapY?: string;

  @property({ attribute: "justify-content" })
  justifyContent: JustifyContent = "flex-start";

  @property({ attribute: "align-items" })
  alignItems: AlignItems = "stretch";

  @property({ attribute: "align-content" })
  alignContent: AlignContent = "flex-start";

  @property()
  wrap: boolean | "reverse" = false;

  render() {
    const _gapX = this.gapX ?? this.gap;
    const _gapY = this.gapY ?? this.gap;
    const wrapCls =
      this.wrap === true
        ? "wrap"
        : this.wrap === "reverse"
        ? "wrap-reverse"
        : "nowrap";

    const childGrow = this.justifyContent === "stretch" ? "child-grow" : "";
    const grandchildGrow =
      this.alignItems === "stretch" ? "grandchild-grow" : "";

    return html`
      <div class="root">
        <div class="flex ${this.direction} ${childGrow} ${grandchildGrow}">
          <slot />
        </div>
      </div>
      <style>
        .flex {
          justify-content: ${this.justifyContent};
          align-content: ${this.alignContent};
          margin-top: calc(${_gapY} / -1);
          margin-left: calc(${_gapX} / -1);
        }

        ::slotted(*) {
          --pcss-flex-gap-x: ${_gapX};
          --pcss-flex-gap-y: ${_gapX};
          --pcss-flex-align-items: ${this.alignItems};
        }
      </style>
    `;
  }

  static styles = css`
    :host {
    }

    .root {
      overflow: visible;
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    .flex {
      display: flex;
      overflow: visible;
      flex-grow: 1;
      flex-shrink: 1;
      min-width: 0;
      flex-basis: auto;
      align-items: stretch;
    }

    .flex.row {
      flex-direction: row;
    }

    .flex.column {
      flex-direction: column;
    }

    .flex.wrap {
      flex-wrap: wrap;
    }

    .flex.wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .flex.nowrap {
      flex-wrap: nowrap;
    }

    ::slotted(*) {
      --pcss-flex-child-grow: 0;
      --pcss-flex-grandchild-grow: 0;
    }

    .flex.child-grow ::slotted(*) {
      --pcss-flex-child-grow: 1;
    }

    .grandchild-grow ::slotted(*) {
      --pcss-flex-grandchild-grow: 1;
    }

    .flex.row ::slotted(*) {
      --pcss-flex-child-direction: column;
      --pcss-flex-child-shrink-width: 0;
      --pcss-flex-child-shrink-height: auto;
      --pcss-flex-grandchild-shrink-width: auto;
      --pcss-flex-grandchild-shrink-height: 0;
    }

    .flex.column ::slotted(*) {
      --pcss-flex-child-direction: row;
      --pcss-flex-child-shrink-width: auto;
      --pcss-flex-child-shrink-height: 0;
      --pcss-flex-grandchild-shrink-width: 0;
      --pcss-flex-grandchild-shrink-height: auto;
    }
  `;
}
