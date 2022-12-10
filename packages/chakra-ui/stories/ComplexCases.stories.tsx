import { contentPositions } from '@moblin/core';
import { storiesOf } from '@storybook/react';

import { Box } from '../src/Box';
import { Flex, FlexItem } from '../src/Flex';
import { Text } from '../src/Text';
import { demo } from './animatable-demo';

const shortText = 'foobar';
const longText = Array(100).fill('foobar').join(' ');

const stories = [true, false].flatMap((overflow) =>
  contentPositions.map(
    (halign) =>
      [
        `h=${halign} ow=${overflow}`,
        () => (
          <Box halign={halign}>
            <Flex direction="column">
              <FlexItem>
                <Text ellipsis>{overflow ? longText : shortText}</Text>
              </FlexItem>
            </Flex>
          </Box>
        ),
      ] as [string, () => JSX.Element]
  )
);

stories.reduce(
  (acc, [name, story]) => {
    acc.add(name, story);
    return acc;
  },
  storiesOf('ComplexStories/TextOverflow', module)
    .addDecorator(demo())
    .addParameters({
      layout: 'centered',
      docs: {
        inlineStories: false,
        iframeHeight: 500,
        source: {
          type: 'code',
        },
      },
    })
);
