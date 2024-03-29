import { chakra, HTMLChakraProps } from '@chakra-ui/system';
import { contentPositions } from '@moblin/core';
import { storiesOf } from '@storybook/react';

import { Box } from '@moblin/chakra-ui';
import { demo } from './animatable-demo';

const Content = ({
  overflowHidden,
  ...props
}: {
  overflowHidden?: boolean;
} & HTMLChakraProps<'div'>) => (
  <chakra.div
    {...props}
    padding={2}
    overflow={overflowHidden ? 'hidden' : 'visible'}
    bg="red.700"
    color="gray.200"
  />
);

const stories = contentPositions.flatMap((valign) =>
  contentPositions.map(
    (halign) =>
      [
        `v=${valign} h=${halign}`,
        () => (
          <Box valign={valign} halign={halign}>
            <Content>Content</Content>
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
  storiesOf('Box', module)
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
