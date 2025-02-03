import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  FilterProps,
  HTMLChakraProps,
  InteractivityProps,
  LayoutProps,
  PositionProps,
  ScrollProps,
  SpaceProps,
  StyleProps,
  TextDecorationProps,
  TransformProps,
  TransitionProps,
  TypographyProps,
} from "@chakra-v2/react";
import { ElementType as As } from "react";

export type SafeInteractivityProps = Pick<
  InteractivityProps,
  "appearance" | "userSelect" | "pointerEvents" | "resize" | "cursor"
>;

export type SafeLayoutProps = Pick<
  LayoutProps,
  | "width"
  | "height"
  | "visibility"
  | "w"
  | "h"
  | "maxWidth"
  | "maxW"
  | "maxHeight"
  | "maxH"
  | "minWidth"
  | "minW"
  | "minHeight"
  | "minH"
  | "overflow"
  | "overflowX"
  | "overflowY"
  | "isolation"
>;

export type SafeSpaceProps = Pick<
  SpaceProps,
  | "p"
  | "padding"
  | "paddingBlock"
  | "paddingBlockEnd"
  | "paddingBlockStart"
  | "paddingBottom"
  | "paddingEnd"
  | "paddingInline"
  | "paddingInlineEnd"
  | "paddingInlineStart"
  | "paddingLeft"
  | "paddingRight"
  | "paddingStart"
  | "paddingTop"
  | "paddingX"
  | "paddingY"
  | "pb"
  | "pe"
  | "pl"
  | "pr"
  | "ps"
  | "pt"
  | "px"
  | "py"
>;

export type SafeFlexItemProps = Pick<
  SpaceProps,
  | "m"
  | "margin"
  | "mt"
  | "marginBlockStart"
  | "marginTop"
  | "mr"
  | "marginInlineEnd"
  | "marginEnd"
  | "me"
  | "marginRight"
  | "mb"
  | "marginBlockEnd"
  | "marginBottom"
  | "ml"
  | "marginInlineStart"
  | "marginStart"
  | "ms"
  | "marginLeft"
  | "mx"
  | "marginInline"
  | "marginX"
  | "my"
  | "marginBlock"
  | "marginY"
>;

export type ContainerProps<T extends As> = Omit<
  HTMLChakraProps<T>,
  keyof StyleProps
> &
  BackgroundProps &
  BorderProps &
  ColorProps &
  EffectProps &
  FilterProps &
  InteractivityProps &
  LayoutProps &
  PositionProps &
  ScrollProps &
  SpaceProps &
  TextDecorationProps &
  TransformProps &
  TransitionProps &
  TypographyProps;
