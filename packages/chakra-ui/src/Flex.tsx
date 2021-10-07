import { chakra, forwardRef, SystemProps, useToken } from '@chakra-ui/system';

import { ContainerProps } from './props';
import { WithChildren } from './react';
import { AlignContent, AlignItems, AlignSelf, JustifyContent } from './types';
import { __DEV__, unsafeCoerce } from './utils';

export interface FlexItemProps extends WithChildren {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: SystemProps['flexBasis'];
}

export const FlexItem = ({
  alignSelf,
  grow,
  shrink = 1,
  basis = 'auto',
  children,
}: FlexItemProps) => {
  return (
    <chakra.div
      display="flex"
      overflow="visible"
      alignItems="stretch"
      flexDirection={unsafeCoerce('var(--pcss-flex-child-direction)')}
      flexGrow={
        grow !== undefined ? grow : unsafeCoerce('var(--pcss-flex-child-grow)')
      }
      flexShrink={shrink}
      flexBasis={basis}
      justifyContent={alignSelf ?? unsafeCoerce('var(--pcss-flex-align-items)')}
      minW={shrink > 0 ? 'var(--pcss-flex-child-shrink-width)' : 'auto'}
      minH={shrink > 0 ? 'var(--pcss-flex-child-shrink-height)' : 'auto'}
      marginLeft="var(--pcss-flex-gap-x)"
      marginTop="var(--pcss-flex-gap-y)"
      sx={{
        '& > *': {
          flexGrow:
            alignSelf === 'stretch'
              ? 1
              : alignSelf !== undefined
              ? 0
              : unsafeCoerce('var(--pcss-flex-grandchild-grow)'),
          flexShrink: 1,
          flexBasis: 'auto',
          minWidth: 'var(--pcss-flex-grandchild-shrink-width)',
          minHeight: 'var(--pcss-flex-grandchild-shrink-height)',
        },
      }}
    >
      {children}
    </chakra.div>
  );
};

if (__DEV__) {
  FlexItem.displayName = 'FlexItem';
}

export interface FlexOptions {
  direction: 'row' | 'column';
  gap?: SystemProps['margin'];
  gapX?: SystemProps['margin'];
  gapY?: SystemProps['margin'];
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  wrap?: boolean | 'reverse';
}

export interface FlexProps extends FlexOptions, ContainerProps<'div'> {}

export const Flex = forwardRef<FlexProps, 'div'>(
  (
    {
      children,
      direction,
      gap,
      gapX = gap,
      gapY = gap,
      alignItems = 'stretch',
      justifyContent = 'flex-start',
      alignContent = 'flex-start',
      wrap = false,
      ...props
    },
    ref
  ) => {
    const _gapX: unknown = useToken('space', `${gapX ?? 0}`);
    const _gapY: unknown = useToken('space', `${gapY ?? 0}`);

    return (
      <chakra.div
        {...props}
        display="flex"
        overflow="visible"
        flexDirection="row"
        alignItems="stretch"
        ref={ref}
      >
        <chakra.div
          sx={{
            '--pcss-flex-gap-x': unsafeCoerce(_gapX),
            '--pcss-flex-gap-y': unsafeCoerce(_gapY),
            '--pcss-flex-align-items': alignItems,
            '--pcss-flex-child-direction':
              direction === 'row' ? 'column' : 'row',
            '--pcss-flex-child-grow': justifyContent === 'stretch' ? '1' : '0',
            '--pcss-flex-child-shrink-width':
              direction === 'row' ? '0' : 'auto',
            '--pcss-flex-child-shrink-height':
              direction === 'column' ? '0' : 'auto',
            '--pcss-flex-grandchild-shrink-width':
              direction === 'row' ? 'auto' : '0',
            '--pcss-flex-grandchild-shrink-height':
              direction === 'column' ? 'auto' : '0',
            '--pcss-flex-grandchild-grow': alignItems === 'stretch' ? '1' : '0',
          }}
          display="flex"
          marginTop={`calc(${_gapY} / -1)`}
          marginLeft={`calc(${_gapX} / -1)`}
          overflow="visible"
          flexDirection={direction}
          flexWrap={
            wrap === true
              ? 'wrap'
              : wrap === 'reverse'
              ? 'wrap-reverse'
              : 'nowrap'
          }
          flexGrow={1}
          flexShrink={1}
          minW={0}
          flexBasis="auto"
          alignItems="stretch"
          alignContent={alignContent}
          justifyContent={justifyContent}
        >
          {children}
        </chakra.div>
      </chakra.div>
    );
  }
);

if (__DEV__) {
  Flex.displayName = 'Flex';
}
