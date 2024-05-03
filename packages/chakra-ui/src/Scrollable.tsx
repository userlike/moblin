import { useTheme } from "@chakra-ui/react";
import { chakra, forwardRef } from "@chakra-ui/system";
import {
  __DEV__,
  ContentPosition,
  MoblinTheme,
  unsafeCoerce,
} from "@moblin/core";

import { ContainerProps } from "./props";

export interface ScrollableOptions {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: ContentPosition;
}

export interface ScrollableProps
  extends ScrollableOptions,
    ContainerProps<"div"> {}

export const Scrollable = forwardRef<ScrollableProps, "div">(
  ({ direction = "column", justifyContent = "flex-start", ...props }, ref) => {
    const theme: MoblinTheme = unsafeCoerce(useTheme());
    const scrollMode =
      theme.moblin?.Scrollable?.overflowType === "overlay" ? "overlay" : "auto";

    return (
      <chakra.div
        {...props}
        ref={ref}
        display="flex"
        overflowX={
          direction === "row" || direction === "row-reverse"
            ? unsafeCoerce(scrollMode)
            : "hidden"
        }
        overflowY={
          direction === "column" || direction === "column-reverse"
            ? unsafeCoerce(scrollMode)
            : "hidden"
        }
        flexDirection={direction}
        alignItems="stretch"
        sx={{
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

const marginStartProp = (
  direction: "row" | "column" | "row-reverse" | "column-reverse"
) => {
  switch (direction) {
    case "row":
    case "row-reverse":
      return "marginInlineStart";
    case "column":
    case "column-reverse":
      return "marginBlockStart";
  }
};

const marginEndProp = (
  direction: "row" | "column" | "row-reverse" | "column-reverse"
) => {
  switch (direction) {
    case "row":
    case "row-reverse":
      return "marginInlineEnd";
    case "column":
    case "column-reverse":
      return "marginBlockEnd";
  }
};

const marginStart = (justifyContent: ContentPosition) =>
  justifyContent === "stretch" || justifyContent === "flex-start"
    ? "0"
    : "auto";

const marginEnd = (justifyContent: ContentPosition) =>
  justifyContent === "stretch" || justifyContent === "flex-end" ? "0" : "auto";
