import { forwardRef } from '@chakra-ui/system';

import { Flex, FlexItem } from './Flex';
import { ContainerProps } from './props';
import { ContentPosition } from './types';
import { __DEV__ } from './utils';

export interface BoxOptions {
  valign?: ContentPosition;
  halign?: ContentPosition;
}

export interface BoxProps extends BoxOptions, ContainerProps<'div'> {}

export const Box = forwardRef<BoxProps, 'div'>(
  ({ children, halign = 'stretch', valign = 'stretch', ...props }, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        direction="column"
        justifyContent={valign}
        alignItems={halign}
      >
        <FlexItem>{children}</FlexItem>
      </Flex>
    );
  }
);

if (__DEV__) {
  Box.displayName = 'Box';
}
