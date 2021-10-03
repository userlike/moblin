import { chakra, HTMLChakraProps } from "@chakra-ui/system";
import { storiesOf } from "@storybook/react";

import { demo } from "./animatable-demo";
import { Box } from "../src/Box";
import { contentPositions } from "../src/types";

const Content = ({
  overflowHidden,
  ...props
}: {
  overflowHidden?: boolean;
} & HTMLChakraProps<"div">) => (
  <chakra.div
    {...props}
    padding="8px"
    overflow={overflowHidden ? "hidden" : "visible"}
    backgroundColor="#f00"
  />
);

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
