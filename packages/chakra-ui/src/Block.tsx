import { chakra, forwardRef } from "@chakra-v2/react";
import { __DEV__ } from "@moblin/core";

import { ContainerProps } from "./props.js";

export interface BlockProps extends ContainerProps<"div"> {}

/**
 * Component to use when you want to use the default
 * [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout)
 * as in the old days.
 */
export const Block = forwardRef<BlockProps, "div">((props, ref) => (
  <chakra.div ref={ref} {...props} display="block" overflow="hidden" />
));

if (__DEV__) {
  Block.displayName = "Block";
}
