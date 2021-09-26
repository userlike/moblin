import { css } from "@emotion/css";
import { demo } from "./animatable-demo";
import { Box } from "./Box";
import { WithChildren } from "./react";
import { Flex, FlexItem } from "./Stack2";

const Item = ({ children }: WithChildren) => (
    <Box className={css({ backgroundColor: "#f00" })}>{children}</Box>
);

export default {
    component: Flex,
    parameters: {
        layout: "centered",
        docs: {
            inlineStories: false,
            iframeHeight: 500,
        },
    },
    decorators: [demo()],
    argTypes: {
        children: {
            control: false,
        },
    },
    args: {
        gap: "8px",
        children: [
            <FlexItem>
                <Item>Foo</Item>
            </FlexItem>,
            <FlexItem>
                <Item>Bar</Item>
            </FlexItem>,
        ],
    },
};

export const base = {};

export const vcenter = {
    args: {
        direction: "column",
        valign: "center",
    },
};

export const hcenter = {
    args: {
        halign: "center",
    },
};

export const vhcenter = {
    args: {
        valign: "center",
        halign: "center",
    },
};

export const vstretch = {
    args: {
        valign: "stretch",
    },
};
