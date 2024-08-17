import "./Flex";
import "./FlexItem";

import { css,html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("x-box")
export class Box extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: stretch;
      justify-content: stretch;
    }

    :host([valign="flex-start"]) {
      align-items: flex-start;
    }

    :host([valign="center"]) {
      align-items: center;
    }

    :host([valign="flex-end"]) {
      align-items: flex-end;
    }

    :host([valign="stretch"]) {
      align-items: stretch;
    }

    :host([halign="flex-start"]) {
      justify-content: flex-start;
    }

    :host([halign="center"]) {
      justify-content: center;
    }

    :host([halign="flex-end"]) {
      justify-content: flex-end;
    }

    :host([halign="stretch"]) {
      justify-content: stretch;
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-shrink: 1;
      min-width: 0;
    }

    :host([halign]:not([halign="stretch"])) ::slotted(*) {
      flex-grow: 0;
    }
  `;
  render() {
    return html` <slot /> `;
  }
}
