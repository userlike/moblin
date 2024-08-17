import "@moblin/web";

import { justifyContent } from "@moblin/core";
import { storiesOf } from "@storybook/web-components";
import { html, TemplateResult } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { demo } from "./animatable-demo";

const content = ({
  big,
  content,
}: {
  big?: "row" | "column";
  content: string;
}) => html`
  <div
    style=${styleMap({
      minWidth: big === "row" ? "48rem" : undefined,
      minHeight: big === "column" ? "48rem" : undefined,
      padding: "8px",
      background: "#9B2C2C",
      color: "#E2E8F0",
    })}
  >
    ${content}
  </div>
`;

const stories = (["column", "row"] as const).flatMap((direction) =>
  [true, false].flatMap((overflow) =>
    justifyContent.map(
      (justifyContent) =>
        [
          `d=${direction} ow=${overflow} j=${justifyContent}`,
          () => html`
            <x-flex
              style=${styleMap({
                overflowX: direction === "row" ? "scroll" : undefined,
                overflowY: direction === "column" ? "scroll" : undefined,
                flexDirection: direction,
                justifyContent,
              })}
            >
              ${content({
                big: overflow ? direction : undefined,
                content: "Content",
              })}
            </x-flex>
          `,
        ] as [string, () => TemplateResult]
    )
  )
);

stories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Scrollable", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
        source: {
          type: "code",
        },
      },
    })
);
