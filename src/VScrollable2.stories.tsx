import * as S from "./storybook";

import { demo } from "./animatable-demo";
import { Box } from "./Box";
import { VScrollable2 } from "./Scrollable2";
import { css } from "@emotion/css";

const Content = () => (
  <Box
    className={css`
      height: 800px;
      padding: 8px;
      background-color: #f00;
    `}
  >
    Content
  </Box>
);
export default {
  component: VScrollable2,
  parameters: {
    layout: "centered",
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
  args: {
    children: <Content />,
  },
  decorators: [demo()],
};

export const base = {};
