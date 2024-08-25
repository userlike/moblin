import {
  shouldForwardProp,
  styled,
  SystemProps,
  useToken,
} from "@chakra-ui/system";
import {
  __DEV__,
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  JustifyContent,
  unsafeCoerce,
} from "@moblin/core";
import { Flex as FlexElement, FlexItem as FlexItemElement } from "@moblin/web";
import { forwardRef } from "react";

import { ContainerProps, SafeFlexItemProps } from "./props";
import { WithChildren, WithClassName } from "./react";
import { reactify } from "./reactify";

export { FlexElement, FlexItemElement };

export interface FlexItemProps extends WithChildren, SafeFlexItemProps {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: SystemProps["flexBasis"];
}

export const FlexItemRaw = reactify("x-flex-item", [
  ["alignSelf", "align-self"],
]);

export const FlexItem = forwardRef<FlexItemElement, FlexItemProps>(
  ({ basis, ...props }, ref) => {
    const basisToken = useToken("space", unsafeCoerce<string>(basis));
    return <FlexItemRaw {...props} basis={basisToken} ref={ref} />;
  }
);

if (__DEV__) {
  FlexItem.displayName = "FlexItem";
}

export interface FlexOptions {
  direction?: FlexDirection;
  gap?: SystemProps["margin"];
  gapX?: SystemProps["margin"];
  gapY?: SystemProps["margin"];
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  wrap?: boolean | "reverse";
}
//
export interface FlexProps
  extends FlexOptions,
    Omit<ContainerProps<"x-flex">, "class" | "direction">,
    WithClassName {}

const FlexRaw = styled(reactify("x-flex"), {
  shouldForwardProp: (prop) => prop === "gap" || shouldForwardProp(prop),
});

export const Flex = forwardRef<FlexElement, FlexProps>(
  (
    {
      direction,
      gap,
      gapX = gap,
      gapY = gap,
      justifyContent,
      alignItems,
      alignContent,
      wrap,
      className,
      ...props
    },
    ref
  ) => {
    const [gapXToken, gapYToken] = useToken(
      "space",
      unsafeCoerce<string[]>([gapX, gapY])
    );

    return (
      <FlexRaw
        {...props}
        direction={direction}
        column-gap={gapXToken}
        row-gap={gapYToken}
        align-items={alignItems}
        justify-content={justifyContent}
        align-content={alignContent}
        wrap={wrap}
        ref={ref}
      />
    );
  }
);

if (__DEV__) {
  Flex.displayName = "Flex";
}
