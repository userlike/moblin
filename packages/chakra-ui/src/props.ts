import {
  As,
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  FilterProps,
  HTMLChakraProps,
  InteractivityProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  StyleProps,
  TextDecorationProps,
  TransformProps,
  TransitionProps,
  TypographyProps,
} from '@chakra-ui/system';

export type SafeInteractivityProps = Pick<
  InteractivityProps,
  'appearance' | 'userSelect' | 'pointerEvents' | 'resize' | 'cursor'
>;

export type SafeLayoutProps = Pick<
  LayoutProps,
  | 'width'
  | 'height'
  | 'visibility'
  | 'w'
  | 'h'
  | 'maxWidth'
  | 'maxW'
  | 'maxHeight'
  | 'maxH'
  | 'minWidth'
  | 'minW'
  | 'minHeight'
  | 'minH'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'isolation'
>;

export type SafeSpaceProps = Pick<
  SpaceProps,
  | 'p'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockEnd'
  | 'paddingBlockStart'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingInline'
  | 'paddingInlineEnd'
  | 'paddingInlineStart'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingTop'
  | 'paddingX'
  | 'paddingY'
  | 'pb'
  | 'pe'
  | 'pl'
  | 'pr'
  | 'ps'
  | 'pt'
  | 'px'
  | 'py'
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
  SafeInteractivityProps &
  SafeLayoutProps &
  PositionProps &
  SafeSpaceProps &
  TextDecorationProps &
  TransformProps &
  TransitionProps &
  TypographyProps;
