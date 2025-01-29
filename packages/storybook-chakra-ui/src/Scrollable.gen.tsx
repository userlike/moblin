import { Meta } from "@storybook/react";

import { Scrollable, ScrollableProps } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";
import { chakra } from "@chakra-ui/system";
import { FlexDirection } from "@moblin/core";

const meta: Meta<ScrollableProps & { overflow: boolean }> = {
  component: Scrollable,
  decorators: [demo()],
  parameters: {
    layout: "centered",
  },
  args: {
    children: <Content />,
  },
  render: ({ direction, justifyContent, overflow }) => (
    <Scrollable direction={direction} justifyContent={justifyContent}>
      <Content big={overflow ? direction : undefined} />
    </Scrollable>
  ),
};

export default meta;

function Content({ big }: { big?: FlexDirection }) {
  return (
    <chakra.div
      minWidth={big === "row" ? "48rem" : undefined}
      minHeight={big === "column" ? "48rem" : undefined}
      padding={2}
      bg="red.700"
      color="gray.200"
    />
  );
}
