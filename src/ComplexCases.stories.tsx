import { Box } from "./Box";
import { FlexItem, Flex } from "./Flex";
import { Text } from "./Text";
import { contentPositions } from "./types";
import { demo } from "./animatable-demo";
import { storiesOf } from "@storybook/react";

const shortText = "foobar";
const longText = Array(100).fill("foobar").join(" ");

const stories = [true, false].flatMap((overflow) =>
  contentPositions.map(
    (halign) =>
      [
        `h=${halign} ow=${overflow}`,
        () => (
          <Box width="200px" height="200px" halign={halign}>
            <Flex direction="column">
              <FlexItem>
                <Text ellipsis>{overflow ? longText : shortText}</Text>
              </FlexItem>
            </Flex>
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
  storiesOf("ComplexStories/TextOverflow", module)
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
