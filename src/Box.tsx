import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";
import { FlexItem, Flex } from "./Flex";
import { ContentPosition, contentPositions } from "./types";

export interface BoxProps {
  valign?: ContentPosition;
  halign?: ContentPosition;
}

export const Box = ({
  children,
  halign = "stretch",
  valign = "stretch",
  className,
}: BoxProps & WithChildren & WithClassName): JSX.Element => (
  <Flex
    direction="column"
    className={className}
    justifyContent={valign}
    alignItems={halign}
  >
    <FlexItem>{children}</FlexItem>
  </Flex>
);
