import { demo } from "./animatable-demo";
import { Scrollable } from "./Scrollable";
import { contentPositions } from "./types";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";

const Content = styled.div<{ big?: "row" | "column" }>`
  min-width: ${({ big }) => (big === "row" ? "800px" : undefined)};
  min-height: ${({ big }) => (big === "column" ? "800px" : undefined)};
  padding: 8px;
  background-color: #f00;
`;

const stories = (["column", "row"] as const).flatMap((direction) =>
  [true, false].flatMap((overflow) =>
    contentPositions.map(
      (justifyContent) =>
        [
          `d=${direction} ow=${overflow} j=${justifyContent}`,
          () => (
            <Scrollable direction={direction} justifyContent={justifyContent}>
              <Content big={overflow ? direction : undefined}>Content</Content>
            </Scrollable>
          ),
        ] as [string, () => JSX.Element]
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
