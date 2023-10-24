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
    /**
     * Host acts as a normalizer to handle edge cases of flex layout.
     */
    :host {
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    /**
     * Display
     * ===================================
     */
    .root {
      display: flex;
    }

    :host([inline]) .root {
      display: inline-flex;
    }
    /* =================================== */

    /**
     * Direction
     * ===================================
     */
    :host(:not([direction])) .root,
    :host([direction="row"]) .root {
      flex-direction: row;
      --moblin-direction: column;
    }

    :host([direction="row-reverse"]) .root {
      flex-direction: row-reverse;
      --moblin-direction: column;
    }

    :host([direction="column"]) .root {
      flex-direction: column;
      --moblin-direction: row;
    }

    :host([direction="column-reverse"]) .root {
      flex-direction: column-reverse;
      --moblin-direction: row;
    }

    ::slotted(x-flex-item) {
      --moblin-direction: inherit;
      flex-direction: var(--moblin-direction);
    }

    /* =================================== */

    /**
     * Wrap
     * ===================================
     */
    :host([wrap]) .root {
      flex-wrap: wrap;
    }

    :host([wrap="reverse"]) .root {
      flex-wrap: wrap-reverse;
    }
    /* =================================== */

    /**
     * Align content
     * ===================================
     */
    :host([align-content="flex-start"]) .root {
      align-content: flex-start;
    }
    :host([align-content="flex-end"]) .root {
      align-content: flex-end;
    }
    :host([align-content="center"]) .root {
      align-content: center;
    }
    :host([align-content="space-between"]) .root {
      align-content: space-between;
    }
    :host([align-content="space-around"]) .root {
      align-content: space-around;
    }
    :host([align-content="space-evenly"]) .root {
      align-content: space-evenly;
    }
    /* =================================== */

    /**
     * Justify content
     * ===================================
     */
    :host([justify-content="flex-start"]) .root {
      justify-content: flex-start;
    }
    :host([justify-content="flex-end"]) .root {
      justify-content: flex-end;
    }
    :host([justify-content="center"]) .root {
      justify-content: center;
    }
    :host([justify-content="space-between"]) .root {
      justify-content: space-between;
    }
    :host([justify-content="space-around"]) .root {
      justify-content: space-around;
    }
    :host([justify-content="space-evenly"]) .root {
      justify-content: space-evenly;
    }
    /* =================================== */

    /**
     * Align items
     * ===================================
     */

    :host([align-items="flex-start"]) .root {
      --moblin-align: flex-start;
      --moblin-child-grow: 0;
    }

    :host([align-items="flex-end"]) .root {
      --moblin-align: flex-end;
      --moblin-child-grow: 0;
    }

    :host([align-items="center"]) .root {
      --moblin-align: center;
      --moblin-child-grow: 0;
    }

    :host([align-items="stretch"]) .root,
    :host(:not([align-items])) .root {
      --moblin-align: stretch;
      --moblin-child-grow: 1;
    }

    ::slotted(x-flex-item) {
      --moblin-align: inherit;
    }

    ::slotted(x-flex-item[align-self="flex-start"]) {
      --moblin-align: flex-start;
      --moblin-child-grow: 0;
    }

    ::slotted(x-flex-item[align-self="flex-end"]) {
      --moblin-align: flex-end;
      --moblin-child-grow: 0;
    }

    ::slotted(x-flex-item[align-self="center"]) {
      --moblin-align: center;
      --moblin-child-grow: 0;
    }

    ::slotted(x-flex-item[align-self="stretch"]) {
      --moblin-align: stretch;
      --moblin-child-grow: 1;
    }

    ::slotted(x-flex-item) {
      justify-content: var(--moblin-align);
    }
    /* =================================== */

    /**
     * x-flex-item and child min width/height normalization
     */
    :host(:not([direction])) .root,
    :host([direction="row"]) .root,
    :host([direction="row-reverse"]) .root {
      --moblin-item-min-width: 0;
      --moblin-item-min-height: auto;
      --moblin-child-min-width: auto;
      --moblin-child-min-height: 0;
    }

    :host([direction="column"]) .root,
    :host([direction="column-reverse"]) .root {
      --moblin-item-min-width: auto;
      --moblin-item-min-height: 0;
      --moblin-child-min-width: 0;
      --moblin-child-min-height: auto;
    }

    ::slotted(x-flex-item:not([shrink="0"])) {
      --moblin-item-min-width: inherit;
      --moblin-item-min-height: inherit;
      min-width: var(--moblin-item-min-width);
      min-height: var(--moblin-item-min-height);
    }
    /* =================================== */
  `;

  render() {
    const gap = html`
      <style>
        .root {
          column-gap: ${this.columnGap || this.gap || "0"};
          row-gap: ${this.rowGap || this.gap || "0"};
        }
      </style>
    `;

    return html`${gap}
      <div class="root"><slot /></div>`;
  }
}
