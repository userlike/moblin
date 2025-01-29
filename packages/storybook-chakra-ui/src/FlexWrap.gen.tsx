import { Meta } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";

const meta: Meta<typeof Flex> = {
  title: "Flex (overflow)",
  component: Flex,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  args: {
    gap: "2",
    wrap: true,
    children: <Content />,
  },
};

export default meta;

function Content() {
  return (
    <>
      <FlexItem shrink={0} basis="8rem">
        <Item>Foo</Item>
      </FlexItem>
      <FlexItem shrink={0} basis="8rem">
        <Item>Bar</Item>
      </FlexItem>
    </>
  );
}

function Item(props: BoxProps) {
  return <Box {...props} bg="red.700" color="gray.200" />;
}
