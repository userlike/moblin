import { chakra, forwardRef } from '@chakra-ui/system';

import { ContainerProps } from './props';
import { ContentPosition } from './types';

export interface ScrollableOptions {
  direction?: 'row' | 'column';
  justifyContent?: ContentPosition;
}

export interface ScrollableProps
  extends ScrollableOptions,
    ContainerProps<'div'> {}

export const Scrollable = forwardRef<ScrollableProps, 'div'>(
  ({ direction = 'column', justifyContent = 'flex-start', ...props }, ref) => (
    <chakra.div
      {...props}
      ref={ref}
      display="flex"
      overflowX={direction === 'row' ? 'auto' : 'hidden'}
      overflowY={direction === 'column' ? 'auto' : 'hidden'}
      flexDirection={direction}
      alignItems="stretch"
      sx={{
        '& > *': {
          flex: justifyContent === 'stretch' ? '1 0 auto' : '0 0 auto',
          [marginStartProp(direction)]: marginStart(justifyContent),
          [marginEndProp(direction)]: marginEnd(justifyContent),
        },
      }}
    />
  )
);

const marginStartProp = (direction: 'row' | 'column') =>
  direction === 'row' ? 'margin-left' : 'margin-top';
const marginEndProp = (direction: 'row' | 'column') =>
  direction === 'row' ? 'margin-right' : 'margin-bottom';

const marginStart = (justifyContent: ContentPosition) =>
  justifyContent === 'stretch' || justifyContent === 'flex-start'
    ? '0'
    : 'auto';

const marginEnd = (justifyContent: ContentPosition) =>
  justifyContent === 'stretch' || justifyContent === 'flex-end' ? '0' : 'auto';
