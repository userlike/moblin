import { forwardRef, SystemProps } from "@chakra-ui/system";
import { __DEV__ } from "@moblin/core";
import { Children, isValidElement } from "react";

import { Flex, FlexItem, FlexProps } from "./Flex";

export interface ListProps extends FlexProps {
  grow?: number;
  shrink?: number;
  basis?: SystemProps["flexBasis"];
}

/**
 * A shorthand component for Flex, not requiring children to be
 * wrapped with `FlexItem`.
 *
 * Keep in mind that you should not use fragments as children,
 * because it will be wrapped by a single `FlexItem` and `FlexItem`
 * does not support containing more than 1 element.
 */
export const List = forwardRef<ListProps, "div">(
  ({ children, grow, shrink, basis, ...props }: ListProps, ref) => (
    <Flex ref={ref} {...props}>
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
  )
);

if (__DEV__) {
  List.displayName = "List";
}
