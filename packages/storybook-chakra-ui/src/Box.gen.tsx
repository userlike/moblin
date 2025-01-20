import { Meta } from "@storybook/react";
import { Box } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";
import { chakra, HTMLChakraProps } from "@chakra-ui/system";

const meta: Meta = {
  component: Box,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  args: {
    children: <Content>Content</Content>,
  },
};

export default meta;

function Content({
  overflowHidden,
  ...props
}: {
  overflowHidden?: boolean;
} & HTMLChakraProps<"div">) {
  return (
    <chakra.div
      {...props}
      padding={2}
      overflow={overflowHidden ? "hidden" : "visible"}
      bg="red.700"
      color="gray.200"
    />
  );
}
