import {
  As,
  BackgroundProps,
  BorderProps,
  EffectProps,
  FilterProps,
  HTMLChakraProps,
  InteractivityProps,
  LayoutProps,
  SpaceProps,
  StyleProps,
  TextDecorationProps,
  TransformProps,
  TransitionProps,
} from '@chakra-ui/system';

export type SafeEffectProps = Pick<
  EffectProps,
  'mixBlendMode' | 'backgroundBlendMode' | 'bgBlendMode' | 'opacity'
>;

export type SafeInteractivityProps = Pick<
  InteractivityProps,
  'appearance' | 'userSelect' | 'pointerEvents' | 'resize' | 'cursor'
>;

export type SafeLayoutProps = Pick<
  LayoutProps,
  'width' | 'height' | 'visibility' | 'w' | 'h'
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
  SafeEffectProps &
  FilterProps &
  SafeInteractivityProps &
  SafeLayoutProps &
  SafeSpaceProps &
  TextDecorationProps &
  TransformProps &
  TransitionProps;
