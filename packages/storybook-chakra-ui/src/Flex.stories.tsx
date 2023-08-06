import { contentDistributions, contentPositions } from "@moblin/core";
import { storiesOf } from "@storybook/react";

import { Box, BoxProps, Flex, FlexItem } from "@moblin/chakra-ui";
import { demo } from "./animatable-demo";

const Item = (props: BoxProps) => (
  <Box {...props} bg="red.700" color="gray.200" />
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
              gap={2}
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

const overflowStories = (["column", "row"] as const).flatMap((direction) =>
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
              gap={2}
            >
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
            </Flex>
          ),
        ] as [string, () => JSX.Element]
    )
  )
);

overflowStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf("Flex (overflow)", module)
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
                gap={2}
                wrap
              >
                <FlexItem shrink={0} basis="8rem">
                  <Item>Foo</Item>
                </FlexItem>
                <FlexItem shrink={0} basis="8rem">
                  <Item>Bar</Item>
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
                gap={2}
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
