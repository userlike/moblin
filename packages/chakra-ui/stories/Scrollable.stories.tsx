import { demo } from "./animatable-demo";
import { Scrollable } from "../src/Scrollable";
import { contentPositions } from "../src/types";
import { storiesOf } from "@storybook/react";
import { WithChildren } from "../src/react";
import { chakra } from "@chakra-ui/system";

const Content = ({
  big,
  children,
}: { big?: "row" | "column" } & WithChildren) => (
  <chakra.div
    minWidth={big === "row" ? "800px" : undefined}
    minHeight={big === "column" ? "800px" : undefined}
    padding="8px"
    backgroundColor="#f00"
  />
);

const stories = (["column", "row"] as const).flatMap((direction) =>
  [true, false].flatMap((overflow) =>
    contentPositions.map(
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
