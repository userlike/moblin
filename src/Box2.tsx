import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";
import { FlexItem, Flex } from "./Stack2";
import { Align } from "./types";

export interface Box2Props {
  valign?: Align;
  halign?: Align;
}

export const Box2 = ({
  children,
  halign = "stretch",
  valign = "stretch",
  className,
}: Box2Props & WithChildren & WithClassName): JSX.Element => (
  <Flex
    direction="vertical"
    className={className}
    halign={halign}
    valign={valign}
  >
    <FlexItem>{children}</FlexItem>
  </Flex>
);
