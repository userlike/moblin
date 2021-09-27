import styled from "@emotion/styled";
import { WithChildren, WithClassName } from "./react";

export interface TextProps extends WithClassName, WithChildren {
  ellipsis?: boolean;
}

export const Text = styled.div<TextProps>`
  display: inline-block;
  overflow: hidden;

  white-space: ${({ ellipsis }) => ellipsis && "nowrap"};
  text-overflow: ${({ ellipsis }) => ellipsis && "ellipsis"};
`;
