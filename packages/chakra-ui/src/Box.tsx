import { forwardRef } from "@chakra-ui/system";
import { __DEV__, ContentPosition } from "@moblin/core";

import { Flex, FlexItem } from "./Flex.js";
import { ContainerProps } from "./props.js";

export interface BoxOptions {
  valign?: ContentPosition;
  halign?: ContentPosition;
}

export interface BoxProps extends BoxOptions, ContainerProps<"div"> {
  overflowAnchor?: "auto" | "none";
}

export const Box = forwardRef<BoxProps, "div">(
  (
    {
      children,
      halign = "stretch",
      valign = "stretch",
      overflowAnchor,
      __css,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        {...props}
        ref={ref}
        direction="column"
        justifyContent={valign}
        alignItems={halign}
        __css={{
          ...__css,
          overflowAnchor,
        }}
      >
        <FlexItem>{children}</FlexItem>
      </Flex>
    );
  }
);

if (__DEV__) {
  Box.displayName = "Box";
}
