import "@moblin/web";

import { chakra, ChakraComponent } from "@chakra-ui/system";
import { __DEV__, AlignItems } from "@moblin/core";

import { ContainerProps } from "./props";
import { reactify } from "./reactify";

export interface BoxOptions {
  valign?: AlignItems;
  halign?: AlignItems;
}

export interface BoxProps extends ContainerProps<"x-box"> {}

export const Box: ChakraComponent<"x-box", BoxProps> = chakra(
  reactify("x-box", [])
);

if (__DEV__) {
  Box.displayName = "Box";
}
