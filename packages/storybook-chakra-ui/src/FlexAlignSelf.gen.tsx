import { Meta } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem, FlexProps } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";
import { ContentPosition } from "@moblin/core";

const meta: Meta<FlexProps & { alignSelf: ContentPosition }> = {
  title: "Flex (overflow)",
  component: Flex,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  args: {
    gap: "2",
  },
  render: ({ alignSelf, ...props }) => (
    <Flex {...props}>
      <Content alignSelf={alignSelf} />
    </Flex>
  ),
};

export default meta;

function Content({ alignSelf }: { alignSelf: ContentPosition }) {
  return (
    <>
      <FlexItem alignSelf={alignSelf}>
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
