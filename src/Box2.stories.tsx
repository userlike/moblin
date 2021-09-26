import { css } from "@emotion/css";
import isChromatic from "chromatic/isChromatic";

import { demo } from "./animatable-demo";
import { Box2 } from "./Box2";
import { WithClassName } from "./react";

const Content = ({
  text = "Content",
  overflowHidden = true,
}: {
  text?: string;
  overflowHidden?: boolean;
} & WithClassName) => (
  <div
    className={css`
      padding: 8px;
      overflow: ${overflowHidden ? "hidden" : "visible"};
      background-color: #f00;
    `}
  >
    {text}
  </div>
);

export default {
  component: Box2,
  args: {
    children: <Content />,
  },
  decorators: [demo({ animate: !isChromatic() })],
  parameters: {
    layout: "centered",
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      source: {
        type: "code",
      },
    },
  },
};

export const base = {
  parameters: {
    chromatic: {
      disable: true,
    },
  },
};

export const center = {
  args: {
    valign: "center",
    halign: "center",
  },
};

export const centerX = {
  args: {
    halign: "center",
  },
};

export const centerY = {
  args: {
    valign: "center",
  },
};

export const centerXEndY = {
  args: {
    valign: "center",
    halign: "end",
  },
};

export const startXStartY = {
  args: {
    valign: "start",
    halign: "start",
  },
};

export const endXEndY = {
  args: {
    valign: "end",
    halign: "end",
  },
};
