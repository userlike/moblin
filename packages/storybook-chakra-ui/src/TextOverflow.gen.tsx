import { Meta } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem, Text } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";

const shortText = "foobar";
const longText = Array(100).fill("foobar").join(" ");

const meta: Meta<BoxProps & { overflow: boolean }> = {
  component: Box,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  render: ({ halign, overflow }) => (
    <Box halign={halign}>
      <Content overflow={overflow} />
    </Box>
  ),
};

export default meta;

function Content({ overflow }: { overflow: boolean }) {
  return (
    <Flex direction="column">
      <FlexItem>
        <Text ellipsis>{overflow ? longText : shortText}</Text>
      </FlexItem>
    </Flex>
  );
}
