import { chakra, ChakraComponent } from "@chakra-ui/system";
import { __DEV__, AlignItems } from "@moblin/core";
import { Box as BoxElement } from "@moblin/web";

import { ContainerProps } from "./props";
import { WithClassName } from "./react";
import { reactify } from "./reactify";

export { BoxElement };

export interface BoxOptions {
  valign?: AlignItems;
  halign?: AlignItems;
}

export interface BoxProps
  extends Omit<ContainerProps<"x-box">, "class">,
    WithClassName {}

export const Box: ChakraComponent<"x-box", BoxProps> = chakra(
  reactify("x-box", [])
);

if (__DEV__) {
  Box.displayName = "Box";
}
