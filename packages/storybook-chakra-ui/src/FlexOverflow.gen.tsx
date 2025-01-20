import { Meta } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem, FlexProps } from "@moblin/chakra-ui";
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
  },
  render: (props) => (
    <Flex {...props}>
      <Content {...props} />
    </Flex>
  ),
};

export default meta;

function Content({ direction }: FlexProps) {
  return (
    <>
      <FlexItem>
        <Item
          w={direction === "row" ? "10rem" : undefined}
          h={direction === "column" ? "10rem" : undefined}
        >
          Foo
        </Item>
      </FlexItem>
      <FlexItem>
        <Item
          w={direction === "row" ? "10rem" : undefined}
          h={direction === "column" ? "10rem" : undefined}
        >
          Bar
        </Item>
      </FlexItem>
    </>
  );
}

function Item(props: BoxProps) {
  return <Box {...props} bg="red.700" color="gray.200" />;
}
