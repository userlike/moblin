import { Children, isValidElement } from 'react';

import { Flex, FlexItem, FlexProps } from './Flex';

export interface ListProps extends FlexProps {}

/**
 * A shorthand component for Flex, not requiring children to be
 * wrapped with `FlexItem`.
 *
 * Keep in mind that you should not use fragments as children,
 * because it will be wrapped by a single `FlexItem` and `FlexItem`
 * does not support containing more than 1 element.
 */
export const List = ({ children, ...props }: ListProps) => (
  <Flex {...props}>
    {Children.map(children, (c) =>
      isValidElement(c) ? (
        <FlexItem key={c.key}>{c}</FlexItem>
      ) : (
        <FlexItem>{c}</FlexItem>
      )
    )}
  </Flex>
);
