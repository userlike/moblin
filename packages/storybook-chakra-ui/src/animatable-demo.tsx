import { chakra, HTMLChakraProps, keyframes } from '@chakra-ui/system';
import isChromatic from 'chromatic/isChromatic';

import * as S from './storybook';

interface DemoOptions {
  title?: string;
  animate?: boolean;
}

const resize = keyframes({
  '0%': {
    width: '12rem',
    height: '12rem',
  },
  '50%': {
    width: '24rem',
    height: '24rem',
  },
  '100%': {
    width: '12rem',
    height: '12rem',
  },
});

const DemoContainer = ({
  title,
  animate,
  ...props
}: DemoOptions & HTMLChakraProps<'div'>) => (
  <chakra.div
    {...props}
    position="relative"
    padding={8}
    bg="green.300"
    color="black"
    __css={{
      '& > *': {
        width: '12rem',
        height: '12rem',
        willChange: 'width, height',
        animationName: animate ? resize.toString() : 'none',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
    }}
  />
);

export const demo =
  ({
    title = 'Container',
    animate = !isChromatic(),
  }: DemoOptions = {}): S.Decorator =>
  (Story) =>
    (
      <DemoContainer animate={animate}>
        <Story />
        <chakra.div position="absolute" top="0.5rem" left="0.5rem">
          {title}
        </chakra.div>
      </DemoContainer>
    );
