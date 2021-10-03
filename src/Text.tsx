import { chakra, HTMLChakraProps } from "@chakra-ui/system";
import styled from "@emotion/styled";

export interface TextOptions {
  ellipsis?: boolean;
}

export interface TextProps extends TextOptions, HTMLChakraProps<"div"> {}

export const Text = ({ ellipsis, ...props }: TextProps) => (
  <chakra.div
    {...props}
    display="inline-block"
    overflow="hidden"
    whiteSpace={ellipsis ? "nowrap" : undefined}
    textOverflow={ellipsis ? "ellipsis" : undefined}
  />
);
