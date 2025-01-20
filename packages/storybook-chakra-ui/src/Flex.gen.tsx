import { Meta } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";

const meta: Meta = {
  component: Flex,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  args: {
    children: <Content />,
    gap: "2",
  },
};

export default meta;

function Content() {
  return (
    <>
      <FlexItem>
        <Item>Foo</Item>
      </FlexItem>
      <FlexItem>
        <Item>Bar</Item>
      </FlexItem>
    </>
  );
}

function Item(props: BoxProps) {
  return <Box {...props} bg="red.700" color="gray.200" />;
}
