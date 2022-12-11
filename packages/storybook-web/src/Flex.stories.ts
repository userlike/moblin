import "@moblin/web";

import { contentDistributions, contentPositions } from "@moblin/core";
import { storiesOf } from "@storybook/web-components";
import { html, TemplateResult } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { demo } from "./animatable-demo";

const item = (content: string) => html`
  <x-box
    style=${styleMap({
      background: "#9B2C2C",
      color: "#E2E8F0",
    })}
  >
    ${content}
  </x-box>
`;

const flexStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.map(
      (justifyContent) =>
        [
          `d=${direction[0]} a=${alignItems} j=${justifyContent}`,
          () => html`
            <x-flex
              direction="${direction}"
              align-items="${alignItems}"
              justify-content="${justifyContent}"
              gap="8px"
            >
              <x-flex-item>${item("Foo")}</x-flex-item>
              <x-flex-item>${item("Bar")}</x-flex-item>
            </x-flex>
          `,
        ] as [string, () => TemplateResult]
    )
  )
);

flexStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexWrapStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.flatMap((justifyContent) =>
      contentDistributions.map(
        (alignContent) =>
          [
            `d=${direction[0]} a=${alignItems} j=${justifyContent} w=${alignContent}`,
            () => html`
              <x-flex
                direction="${direction}"
                align-items="${alignItems}"
                justify-content="${justifyContent}"
                align-content="${alignContent}"
                gap="0.5rem"
                wrap="wrap"
              >
                <x-flex-item shrink="0" basis="8rem">
                  ${item("Foo")}
                </x-flex-item>
                <x-flex-item shrink="0" basis="8rem">
                  ${item("Bar")}
                </x-flex-item>
              </x-flex>
            `,
          ] as [string, () => TemplateResult]
      )
    )
  )
);

flexWrapStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex (wrap)", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexAlignSelfStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.flatMap((justifyContent) =>
      contentPositions.map(
        (alignSelf) =>
          [
            `d=${direction[0]} a=${alignItems} j=${justifyContent} as=${alignSelf}`,
            () => html`
              <x-flex
                direction=${direction}
                align-items=${alignItems}
                justify-content=${justifyContent}
                gap="0.5rem"
              >
                <x-flex-item align-self=${alignSelf}>
                  ${item("Foo")}
                </x-flex-item>
                <x-flex-item>${item("Bar")}</x-flex-item>
              </x-flex>
            `,
          ] as [string, () => TemplateResult]
      )
    )
  )
);

flexAlignSelfStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex (alignSelf)", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);
