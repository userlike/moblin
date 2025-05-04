import { chakra, forwardRef, SystemProps } from "@chakra-ui/system";
import {
  __DEV__,
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  isHorizontal,
  isVertical,
  JustifyContent,
  unsafeCoerce,
} from "@moblin/core";

import { ContainerProps, SafeFlexItemProps } from "./props.js";
import { WithChildren } from "./react.js";

export interface FlexItemProps extends WithChildren, SafeFlexItemProps {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: SystemProps["flexBasis"];
  overflowAnchor?: "auto" | "none";
  order?: number;
}

export const FlexItem = forwardRef<FlexItemProps, "div">(function FlexItem(
  {
    alignSelf,
    grow,
    shrink = 1,
    basis = "auto",
    children,
    overflowAnchor,
    order,
    ...props
  },
  ref,
) {
  return (
    <chakra.div
      ref={ref}
      display="flex"
      overflow="visible"
      alignItems="stretch"
      flexDirection={unsafeCoerce("var(--pcss-flex-child-direction)")}
      flexGrow={
        grow !== undefined ? grow : unsafeCoerce("var(--pcss-flex-child-grow)")
      }
      flexShrink={shrink}
      flexBasis={basis}
      order={order}
      justifyContent={alignSelf ?? unsafeCoerce("var(--pcss-flex-align-items)")}
      minW={shrink > 0 ? "var(--pcss-flex-child-shrink-width)" : "auto"}
      minH={shrink > 0 ? "var(--pcss-flex-child-shrink-height)" : "auto"}
      __css={{
        "& > *": {
          flexGrow:
            alignSelf === "stretch"
              ? 1
              : alignSelf !== undefined
                ? 0
                : unsafeCoerce("var(--pcss-flex-grandchild-grow)"),
          flexShrink: 1,
          flexBasis: "auto",
          minWidth: "var(--pcss-flex-grandchild-shrink-width)",
          minHeight: "var(--pcss-flex-grandchild-shrink-height)",
        },
        overflowAnchor,
      }}
      {...props}
    >
      {children}
    </chakra.div>
  );
});

if (__DEV__) {
  FlexItem.displayName = "FlexItem";
}

export interface FlexOptions {
  direction: FlexDirection;
  gap?: SystemProps["margin"];
  gapX?: SystemProps["margin"];
  gapY?: SystemProps["margin"];
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  wrap?: boolean | "reverse";
  overflowAnchor?: "auto" | "none";
}

export interface FlexProps extends FlexOptions, ContainerProps<"div"> {}

export const Flex = forwardRef<FlexProps, "div">(
  (
    {
      children,
      direction,
      gap = 0,
      gapX = gap,
      gapY = gap,
      alignItems = "stretch",
      justifyContent = "flex-start",
      alignContent = "flex-start",
      wrap = false,
      overflowAnchor,
      __css,
      ...props
    },
    ref,
  ) => {
    return (
      <chakra.div
        {...props}
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        ref={ref}
        __css={{
          ...__css,
          overflowAnchor,
        }}
      >
        <chakra.div
          __css={{
            "--pcss-flex-align-items": alignItems,
            "--pcss-flex-child-direction": isHorizontal(direction)
              ? "column"
              : "row",
            "--pcss-flex-child-grow": justifyContent === "stretch" ? "1" : "0",
            "--pcss-flex-child-shrink-width": isHorizontal(direction)
              ? "0"
              : "auto",
            "--pcss-flex-child-shrink-height": isVertical(direction)
              ? "0"
              : "auto",
            "--pcss-flex-grandchild-shrink-width": isHorizontal(direction)
              ? "auto"
              : "0",
            "--pcss-flex-grandchild-shrink-height": isVertical(direction)
              ? "auto"
              : "0",
            "--pcss-flex-grandchild-grow": alignItems === "stretch" ? "1" : "0",
          }}
          display="flex"
          overflow="visible"
          flexDirection={direction}
          flexWrap={
            wrap === true
              ? "wrap"
              : wrap === "reverse"
                ? "wrap-reverse"
                : "nowrap"
          }
          columnGap={gapX}
          rowGap={gapY}
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
  },
);

if (__DEV__) {
  Flex.displayName = "Flex";
}
