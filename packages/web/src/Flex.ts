import type { AlignContent, AlignItems, JustifyContent } from "@moblin/core";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("x-flex")
export class Flex extends LitElement {
  @property()
  direction: "row" | "column" = "row";

  @property({ attribute: "justify-content" })
  justifyContent: JustifyContent = "flex-start";

  @property({ attribute: "align-items" })
  alignItems: AlignItems = "stretch";

  @property({ attribute: "align-content" })
  alignContent: AlignContent = "flex-start";

  @property()
  wrap: "wrap" | "wrap-reverse" | "nowrap" = "nowrap";

  @property()
  gap: string = "0";

  @property({ attribute: "gap-x" })
  gapX: string;

  @property({ attribute: "gap-y" })
  gapY: string;

  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        ::slotted(*) {
          --moblin-flex-align-items: ${this.alignItems};
          --moblin-flex-child-direction: ${this.direction === "row"
            ? "column"
            : "row"};
          --moblin-flex-child-grow: ${this.justifyContent === "stretch"
            ? "1"
            : "0"};
          --moblin-flex-child-shrink-width: ${this.direction === "row"
            ? "0"
            : "auto"};
          --moblin-flex-child-shrink-height: ${this.direction === "column"
            ? "0"
            : "auto"};
          --moblin-flex-grandchild-shrink-width: ${this.direction === "row"
            ? "auto"
            : "0"};
          --moblin-flex-grandchild-shrink-height: ${this.direction === "column"
            ? "auto"
            : "0"};
          --moblin-flex-grandchild-grow: ${this.alignItems === "stretch"
            ? "1"
            : "0"};
        }
      </style>
      <div
        style=${styleMap({
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          width: "100%",
          height: "100%",
        })}
      >
        <div
          style=${styleMap({
            display: "flex",
            flexDirection: this.direction,
            flexWrap: this.wrap,
            columnGap: this.gapX ?? this.gap,
            rowGap: this.gapY ?? this.gap,
            flexGrow: "1",
            flexShrink: "1",
            minWidth: "0",
            flexBasis: "auto",
            alignItems: "stretch",
            alignContent: this.alignContent,
            justifyContent: this.justifyContent,
          })}
        >
          <slot />
        </div>
      </div>
    `;
  }
}
