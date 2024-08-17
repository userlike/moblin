import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("x-flex-item")
export class FlexItem extends LitElement {
  @property({ attribute: true })
  grow: string = "0";

  @property({ attribute: true })
  shrink: string = "1";

  @property({ attribute: true })
  basis: string = "auto";

  static styles = css`
    :host {
      --moblin-direction: inherit;
      --moblin-align: inherit;
      --moblin-item-min-width: inherit;
      --moblin-item-min-height: inherit;
      --moblin-child-min-width: inherit;
      --moblin-child-min-height: inherit;

      display: flex;
      flex-direction: var(--moblin-direction);
      justify-content: var(--moblin-align);
      align-items: stretch;
    }

    :host(:not([shrink="0"])) {
      min-width: var(--moblin-item-min-width);
      min-height: var(--moblin-item-min-height);
    }

    ::slotted(*) {
      --moblin-child-grow: inherit;
      --moblin-child-min-width: inherit;
      --moblin-child-min-height: inherit;
      flex-shrink: 1;
      flex-basis: auto;
      flex-grow: var(--moblin-child-grow, 0);
      min-width: var(--moblin-child-min-width);
      min-height: var(--moblin-child-min-height);
    }

    :host([align-self="flex-start"]) {
      --moblin-align: flex-start;
      --moblin-child-grow: 0;
    }

    :host([align-self="flex-end"]) {
      --moblin-align: flex-end;
      --moblin-child-grow: 0;
    }

    :host([align-self="center"]) {
      --moblin-align: center;
      --moblin-child-grow: 0;
    }

    :host([align-self="stretch"]) {
      --moblin-align: stretch;
      --moblin-child-grow: 1;
    }

    /**
     * extended inheritance
     */
    slot {
      all: inherit;
      display: contents;
    }
  `;

  render() {
    const styles = html`
      <style>
        :host {
          flex-grow: ${this.grow};
          flex-shrink: ${this.shrink};
          flex-basis: ${this.basis};
        }
      </style>
    `;

    return html`${styles} <slot />`;
  }
}
