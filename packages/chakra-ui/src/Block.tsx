import { chakra, forwardRef } from '@chakra-ui/system';

import { ContainerProps } from './props';

export interface BlockProps extends ContainerProps<'div'> {}

/**
 * Component to use when you want to use the default
 * [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout)
 * as in the old days.
 */
export const Block = forwardRef<BlockProps, 'div'>((props, ref) => (
  <chakra.div ref={ref} {...props} display="block" overflow="hidden" />
));
