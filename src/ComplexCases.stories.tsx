import { css } from "@emotion/css";
import { Box2 } from "./Box2";
import { WithChildren } from "./react";
import { FlexItem, Flex } from "./Stack2";
import { Text } from "./Text";

const Component = ({ children }: WithChildren) => (
  <Box2
    halign="center"
    className={css`
      width: 200px;
      height: 200px;
    `}
  >
    <Flex>
      <FlexItem>
        <Text ellipsis>{children}</Text>
      </FlexItem>
    </Flex>
  </Box2>
);

export default {
  component: Component,
};

export const centeredEllipsis = {
  args: {
    children: Array(100).fill("foobar").join(" "),
  },
};

export const centeredNoOverflow = {
  args: {
    children: "foobar",
  },
};
