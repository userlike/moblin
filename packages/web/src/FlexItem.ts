import type { AlignSelf } from "@moblin/core";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("x-flex-item")
export class FlexItem extends LitElement {
  static styles = css`
    :host {
      min-width: 0;
      min-height: 0;
    }

    ::slotted(*) {
      flex-shrink: 1;
      flex-basis: auto;
    }

    :host([align-self="stretch"]) ::slotted(*) {
      flex-grow: 1;
    }

    x-flex[justify-content="stretch"] :host(:not([align-self])) ::slotted(*) {
      flex-grow: 1;
    }

    x-flex:not([justify-content="stretch"])
      :host(:not([align-self]))
      ::slotted(*) {
      flex-grow: 0;
    }

    :host([align-self]):not([align-self="stretch"]) ::slotted(*) {
    }

    :host(:not([align-self="stretch"])) ::slotted(*) {
      flex-grow: 0;
    }

    x-flex[direction="row"] > :host > ::slotted(*) {
      min-height: 0;
    }

    x-flex[direction="column"] > :host > ::slotted(*) {
      min-width: 0;
    }

    * {
      display: flex;
      overflow: visible;
      width: 100%;
      height: 100%;
      flex-direction: "var(--moblin-flex-child-direction)",
      alignItems: "stretch",
      justifyContent: this.alignSelf ?? "var(--moblin-flex-align-items)",
    }
  `;
  @property({ attribute: "align-self" })
  alignSelf?: AlignSelf;

  @property()
  grow?: number;

  @property()
  shrink: number = 1;

  @property()
  basis: string = "auto";

  render() {
    return html`
      <style>
        :host {
          flex-grow: ${this.grow !== undefined
            ? this.grow
            : "var(--moblin-flex-child-grow)"};
          flex-shrink: ${this.shrink};
          flex-basis: ${this.basis};
        }
      </style>
      <div
        style=${styleMap({
          display: "flex",
          overflow: "visible",
          width: "100%",
          height: "100%",
          flexDirection: "var(--moblin-flex-child-direction)",
          alignItems: "stretch",
          justifyContent: this.alignSelf ?? "var(--moblin-flex-align-items)",
        })}
      >
        <slot />
      </div>
    `;
  }
}
