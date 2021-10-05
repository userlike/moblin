import { chakra, HTMLChakraProps, keyframes } from '@chakra-ui/system';
import isChromatic from 'chromatic/isChromatic';

import * as S from './storybook';

interface DemoOptions {
  title?: string;
  animate?: boolean;
}

const resize = keyframes({
  '0%': {
    width: '200px',
    height: '200px',
  },
  '50%': {
    width: '400px',
    height: '400px',
  },
  '100%': {
    width: '200px',
    height: '200px',
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
    padding="32px"
    backgroundColor="#0f0"
    __css={{
      '& > div:first-of-type': {
        width: '200px',
        height: '200px',
        willChange: 'width, height',
        animationName: animate ? resize.toString() : 'none',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
    }}
  />
);

export const demo = ({
  title = 'Container',
  animate = !isChromatic(),
}: DemoOptions = {}): S.Decorator => Story => (
  <DemoContainer animate={animate}>
    <Story />
    <chakra.div position="absolute" top="8px" left="8px">
      {title}
    </chakra.div>
  </DemoContainer>
);
