import { chakra } from "@chakra-ui/system";
import { Scrollable, WithChildren } from "@moblin/chakra-ui";
import { justifyContent } from "@moblin/core";
import { storiesOf } from "@storybook/react";

import { demo } from "./animatable-demo";

const Content = ({
  big,
  children,
}: { big?: "row" | "column" } & WithChildren) => (
  <chakra.div
    minWidth={big === "row" ? "48rem" : undefined}
    minHeight={big === "column" ? "48rem" : undefined}
    padding={2}
    bg="red.700"
    color="gray.200"
  >
    {children}
  </chakra.div>
);

const stories = (["column", "row"] as const).flatMap((direction) =>
  [true, false].flatMap((overflow) =>
    justifyContent.map(
      (justifyContent) =>
        [
          `d=${direction} ow=${overflow} j=${justifyContent}`,
          () => (
            <Scrollable direction={direction} justifyContent={justifyContent}>
              <Content big={overflow ? direction : undefined}>Content</Content>
            </Scrollable>
          ),
        ] as [string, () => JSX.Element]
    )
  )
);

stories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Scrollable", module)
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
