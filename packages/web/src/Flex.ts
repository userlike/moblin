import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("x-flex")
export class Flex extends LitElement {
  @property({ attribute: true })
  gap?: string;

  @property({ attribute: "column-gap" })
  columnGap?: string;

  @property({ attribute: "row-gap" })
  rowGap?: string;

  static styles = css`
    :host {
      display: flex;
      align-items: stretch;
    }

    :host([inline]) {
      display: inline-flex;
    }

    /**
     * Direction
     * ===================================
     */
    :host(:not([direction])),
    :host([direction="row"]) {
      flex-direction: row;
      --moblin-direction: column;
    }

    :host([direction="row-reverse"]) {
      flex-direction: row-reverse;
      --moblin-direction: column;
    }

    :host([direction="column"]) {
      flex-direction: column;
      --moblin-direction: row;
    }

    :host([direction="column-reverse"]) {
      flex-direction: column-reverse;
      --moblin-direction: row;
    }

    /* =================================== */

    /**
     * Wrap
     * ===================================
     */
    :host([wrap]) {
      flex-wrap: wrap;
    }

    :host([wrap="reverse"]) {
      flex-wrap: wrap-reverse;
    }
    /* =================================== */

    /**
     * Align content
     * ===================================
     */
    :host([align-content="flex-start"]) {
      align-content: flex-start;
    }
    :host([align-content="flex-end"]) {
      align-content: flex-end;
    }
    :host([align-content="center"]) {
      align-content: center;
    }
    :host([align-content="space-between"]) {
      align-content: space-between;
    }
    :host([align-content="space-around"]) {
      align-content: space-around;
    }
    :host([align-content="space-evenly"]) {
      align-content: space-evenly;
    }
    :host([align-content="stretch"]) {
      align-content: stretch;
    }
    /* =================================== */

    /**
     * Justify content
     * ===================================
     */
    :host([justify-content="flex-start"]) {
      justify-content: flex-start;
    }
    :host([justify-content="flex-end"]) {
      justify-content: flex-end;
    }
    :host([justify-content="center"]) {
      justify-content: center;
    }
    :host([justify-content="space-between"]) {
      justify-content: space-between;
    }
    :host([justify-content="space-around"]) {
      justify-content: space-around;
    }
    :host([justify-content="space-evenly"]) {
      justify-content: space-evenly;
    }
    :host([justify-content="stretch"]) {
      justify-content: stretch;
    }
    /* =================================== */

    /**
     * Align items
     * ===================================
     */

    :host([align-items="flex-start"]) {
      --moblin-align: flex-start;
      --moblin-child-grow: 0;
    }

    :host([align-items="flex-end"]) {
      --moblin-align: flex-end;
      --moblin-child-grow: 0;
    }

    :host([align-items="center"]) {
      --moblin-align: center;
      --moblin-child-grow: 0;
    }

    :host([align-items="stretch"]),
    :host(:not([align-items])) {
      --moblin-align: stretch;
      --moblin-child-grow: 1;
    }

    /* =================================== */

    /**
     * x-flex-item and child min width/height normalization
     */
    :host(:not([direction])),
    :host([direction="row"]),
    :host([direction="row-reverse"]) {
      --moblin-item-min-width: 0;
      --moblin-item-min-height: auto;
      --moblin-child-min-width: auto;
      --moblin-child-min-height: 0;
    }

    :host([direction="column"]),
    :host([direction="column-reverse"]) {
      --moblin-item-min-width: auto;
      --moblin-item-min-height: 0;
      --moblin-child-min-width: 0;
      --moblin-child-min-height: auto;
    }

    /* =================================== */

    /**
     * extended inheritance
     */
    slot {
      all: inherit;
      display: contents;
    }
  `;

  render() {
    const gap = html`
      <style>
        :host {
          column-gap: ${this.columnGap || this.gap || "0"};
          row-gap: ${this.rowGap || this.gap || "0"};
        }
      </style>
    `;

    return html`${gap} <slot />`;
  }
}
