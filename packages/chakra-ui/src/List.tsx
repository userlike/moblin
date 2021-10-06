import { SystemProps } from '@chakra-ui/system';
import { Children, isValidElement } from 'react';

import { Flex, FlexItem, FlexProps } from './Flex';

export interface ListProps extends FlexProps {
  grow?: number;
  shrink?: number;
  basis?: SystemProps['flexBasis'];
}

/**
 * A shorthand component for Flex, not requiring children to be
 * wrapped with `FlexItem`.
 *
 * Keep in mind that you should not use fragments as children,
 * because it will be wrapped by a single `FlexItem` and `FlexItem`
 * does not support containing more than 1 element.
 */
export const List = ({
  children,
  grow,
  shrink,
  basis,
  ...props
}: ListProps) => (
  <Flex {...props}>
    {Children.map(children, (c) =>
      isValidElement(c) ? (
        <FlexItem key={c.key} grow={grow} shrink={shrink} basis={basis}>
          {c}
        </FlexItem>
      ) : c != null ? (
        <FlexItem grow={grow} shrink={shrink} basis={basis}>
          {c}
        </FlexItem>
      ) : null
    )}
  </Flex>
);
