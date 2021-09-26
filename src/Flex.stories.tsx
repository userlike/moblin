import { css } from "@emotion/css";
import { demo } from "./animatable-demo";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { WithChildren } from "./react";
import { Flex, FlexItem } from "./Flex";
import { contentDistributions, contentPositions } from "./types";

const Item = ({ big, children }: WithChildren & { big?: "row" | "column" }) => (
  <Box
    className={css({
      backgroundColor: "#f00",
      minHeight: big === "column" ? "150px" : undefined,
      minWidth: big === "row" ? "150px" : undefined,
    })}
  >
    {children}
  </Box>
);

const flexStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.map(
      (justifyContent) =>
        [
          `d=${direction[0]} a=${alignItems} j=${justifyContent}`,
          () => (
            <Flex
              direction={direction}
              alignItems={alignItems}
              justifyContent={justifyContent}
              gap="8px"
            >
              <FlexItem>
                <Item>Foo</Item>
              </FlexItem>
              <FlexItem>
                <Item>Bar</Item>
              </FlexItem>
            </Flex>
          ),
        ] as [string, () => JSX.Element]
    )
  )
);

flexStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexWrapStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.flatMap((justifyContent) =>
      contentDistributions.map(
        (alignContent) =>
          [
            `d=${direction[0]} a=${alignItems} j=${justifyContent} w=${alignContent}`,
            () => (
              <Flex
                direction={direction}
                alignItems={alignItems}
                justifyContent={justifyContent}
                alignContent={alignContent}
                gap="8px"
                wrap
              >
                <FlexItem>
                  <Item big={direction}>Foo</Item>
                </FlexItem>
                <FlexItem>
                  <Item big={direction}>Bar</Item>
                </FlexItem>
              </Flex>
            ),
          ] as [string, () => JSX.Element]
      )
    )
  )
);

flexWrapStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex (wrap)", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexAlignSelfStories = (["column", "row"] as const).flatMap((direction) =>
  contentPositions.flatMap((alignItems) =>
    contentDistributions.flatMap((justifyContent) =>
      contentPositions.map(
        (alignSelf) =>
          [
            `d=${direction[0]} a=${alignItems} j=${justifyContent} as=${alignSelf}`,
            () => (
              <Flex
                direction={direction}
                alignItems={alignItems}
                justifyContent={justifyContent}
                gap="8px"
              >
                <FlexItem alignSelf={alignSelf}>
                  <Item>Foo</Item>
                </FlexItem>
                <FlexItem>
                  <Item>Bar</Item>
                </FlexItem>
              </Flex>
            ),
          ] as [string, () => JSX.Element]
      )
    )
  )
);

flexAlignSelfStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex (alignSelf)", module)
    .addDecorator(demo())
    .addParameters({
      layout: "centered",
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);
