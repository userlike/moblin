import { useTheme } from "@chakra-ui/react";
import { chakra, forwardRef } from "@chakra-ui/system";
import {
  __DEV__,
  AlignItems,
  FlexDirection,
  isHorizontal,
  isVertical,
  MoblinTheme,
  unsafeCoerce,
} from "@moblin/core";

import { ContainerProps } from "./props";

export interface ScrollableOptions {
  direction?: FlexDirection;
  justifyContent?: AlignItems;
  overflowAnchor?: "auto" | "none";
}

export interface ScrollableProps
  extends ScrollableOptions,
    ContainerProps<"div"> {}

export const Scrollable = forwardRef<ScrollableProps, "div">(
  (
    {
      direction = "column",
      justifyContent = "flex-start",
      overflowAnchor,
      __css,
      ...props
    },
    ref
  ) => {
    const theme: MoblinTheme = unsafeCoerce(useTheme());
    const scrollMode =
      theme.moblin?.Scrollable?.overflowType === "overlay" ? "overlay" : "auto";

    return (
      <chakra.div
        {...props}
        ref={ref}
        display="flex"
        overflowX={
          isHorizontal(direction) ? unsafeCoerce(scrollMode) : "hidden"
        }
        overflowY={isVertical(direction) ? unsafeCoerce(scrollMode) : "hidden"}
        flexDirection={direction}
        alignItems="stretch"
        __css={{
          ...__css,
          overflowAnchor,
          // ignore __css['& > *'] on purpose.
          "& > *": {
            flex: justifyContent === "stretch" ? "1 0 auto" : "0 0 auto",
            [marginStartProp(direction)]: marginStart(justifyContent),
            [marginEndProp(direction)]: marginEnd(justifyContent),
          },
        }}
      />
    );
  }
);

if (__DEV__) {
  Scrollable.displayName = "Scrollable";
}

const marginStartProp = (direction: FlexDirection) => {
  return isHorizontal(direction) ? "marginInlineStart" : "marginBlockStart";
};

const marginEndProp = (direction: FlexDirection) => {
  return isHorizontal(direction) ? "marginInlineEnd" : "marginBlockEnd";
};

const marginStart = (justifyContent: AlignItems) =>
  justifyContent === "stretch" || justifyContent === "flex-start"
    ? "0"
    : "auto";

const marginEnd = (justifyContent:  AlignItems) =>
  justifyContent === "stretch" || justifyContent === "flex-end" ? "0" : "auto";
