import * as S from "./storybook";

import { demo } from "./animatable-demo";
import { Scrollable } from "./Scrollable";
import { css } from "@emotion/css";
import { Box } from "./Box";
import { contentPositions } from "./types";
import { storiesOf } from "@storybook/react";

const Content = ({ big }: { big?: "row" | "column" }) => (
  <Box
    className={css`
      min-width: ${big === "row" ? "800px" : undefined};
      min-height: ${big === "column" ? "800px" : undefined};
      padding: 8px;
      background-color: #f00;
    `}
  >
    Content
  </Box>
);

const stories = (["column", "row"] as const).flatMap((direction) =>
  [true, false].flatMap((overflow) =>
    contentPositions.map(
      (justifyContent) =>
        [
          `d=${direction} ow=${overflow} j=${justifyContent}`,
          () => (
            <Scrollable direction={direction} justifyContent={justifyContent}>
              <Content big={overflow ? direction : undefined} />
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
