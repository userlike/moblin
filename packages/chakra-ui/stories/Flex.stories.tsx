import { storiesOf } from '@storybook/react';
import { ComponentProps } from 'react';

import { Box } from '../src/Box';
import { Flex, FlexItem } from '../src/Flex';
import { contentDistributions, contentPositions } from '../src/types';
import { demo } from './animatable-demo';

const Item = ({
  big,
  ...props
}: { big?: 'row' | 'column' } & ComponentProps<typeof Box>) => (
  <Box {...props} bg="red.700" color="gray.200" />
);

const flexStories = (['column', 'row'] as const).flatMap((direction) =>
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
);

flexStories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf('Flex', module)
    .addDecorator(demo())
    .addParameters({
      layout: 'centered',
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexWrapStories = (['column', 'row'] as const).flatMap((direction) =>
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
  storiesOf('Flex (wrap)', module)
    .addDecorator(demo())
    .addParameters({
      layout: 'centered',
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);

const flexAlignSelfStories = (['column', 'row'] as const).flatMap((direction) =>
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
  storiesOf('Flex (alignSelf)', module)
    .addDecorator(demo())
    .addParameters({
      layout: 'centered',
      docs: {
        inlineStories: false,
        iframeHeight: 500,
      },
    })
);
