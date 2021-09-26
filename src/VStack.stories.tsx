import { ComponentProps } from "react";

import { WithChildren } from "./react";

import { demo } from "./animatable-demo";
import { Box } from "./Box";
import { FlexItem, StackItem, VStack } from "./Stack";
import { css } from "@emotion/css";

export default {
    component: VStack,
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
};

const Item = ({ children }: WithChildren) => (
    <Box className={css({ backgroundColor: "#f00" })}>{children}</Box>
);

const baseArgs: Partial<ComponentProps<typeof VStack>> = {
    gap: "4px",
    children: [
        <StackItem>
            <Item>Foo</Item>
        </StackItem>,
        <StackItem>
            <Item>Bar</Item>
        </StackItem>,
    ],
};

export const base = {
    args: baseArgs,
};

const flexItemArgs: Partial<ComponentProps<typeof VStack>> = {
    gap: "4px",
    children: [
        <StackItem>
            <Item>Foo</Item>
        </StackItem>,
        <FlexItem>
            <Item>Flex</Item>
        </FlexItem>,
        <StackItem>
            <Item>Bar</Item>
        </StackItem>,
    ],
};

export const flexItem = {
    args: flexItemArgs,
};
