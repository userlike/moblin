import "@moblin/web";

import { contentPositions } from "@moblin/core";
import { storiesOf } from "@storybook/web-components";
import { html, TemplateResult } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { demo } from "./animatable-demo";

const content = ({
  overflowHidden,
  content,
}: {
  overflowHidden?: boolean;
  content: string;
}) => html`
  <div
    style=${styleMap({
      padding: "0.5rem",
      overflow: overflowHidden ? "hidden" : "visible",
      background: "#9B2C2C",
      color: "#E2E8F0",
    })}
  >
    ${content}
  </div>
`;

const stories = contentPositions.flatMap((valign) =>
  contentPositions.map(
    (halign) =>
      [
        `v=${valign} h=${halign}`,
        () => html`
          <x-box valign="${valign}" halign="${halign}">
            ${content({ content: "Content" })}
          </x-box>
        `,
      ] as [string, () => TemplateResult]
  )
);

stories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Box", module)
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
