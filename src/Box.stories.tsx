import isChromatic from "chromatic/isChromatic";
import { css } from "@emotion/css";

import { demo } from "./animatable-demo";
import { Box } from "./Box";

const Content = ({
    text = "Content",
    overflowHidden = true,
    className,
}: {
    text?: string;
    overflowHidden?: boolean;
} & {
    className?: string;
}) => (
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
    component: Box,
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
