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
      display: flex;
    }

    ::slotted(*) {
      flex-shrink: 1;
      flex-basis: auto;
    }

    /**
     * Flex grow handling for align=stretch
     */
    ::slotted(*) {
      --moblin-child-grow: inherit;
      flex-grow: var(--moblin-child-grow, 0);
    }

    /**
     * Child min width/height normalization
     * ===================================
     */
    ::slotted(*) {
      --moblin-child-min-width: inherit;
      --moblin-child-min-height: inherit;
      min-width: var(--moblin-child-min-width);
      min-height: var(--moblin-child-min-height);
    }

    /* =================================== */
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
