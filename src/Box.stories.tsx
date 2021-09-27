import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { storiesOf } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";

import { demo } from "./animatable-demo";
import { Box } from "./Box";
import { WithClassName } from "./react";
import { contentPositions } from "./types";

const Content = styled.div<{
  overflowHidden?: boolean;
}>`
  padding: 8px;
  overflow: ${({ overflowHidden }) => (overflowHidden ? "hidden" : "visible")};
  background-color: #f00;
`;

const stories = contentPositions.flatMap((valign) =>
  contentPositions.map(
    (halign) =>
      [
        `v=${valign} h=${halign}`,
        () => (
          <Box valign={valign} halign={halign}>
            <Content>Content</Content>
          </Box>
        ),
      ] as [string, () => JSX.Element]
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
