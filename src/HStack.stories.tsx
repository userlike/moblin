import { ComponentProps } from "react";

import { WithChildren } from "./react";
import * as S from "./storybook";

import { demo } from "./animatable-demo";
import { Box } from "./Box";
import { FlexItem, HStack, StackItem } from "./Stack";
import { css } from "@emotion/css";

export default {
    component: HStack,
    parameters: {
        layout: "centered",
        docs: {
            inlineStories: false,
            iframeHeight: 500,
        },
    },
    decorators: [demo()],
};

const Item = ({ children }: WithChildren) => (
    <Box className={css({ backgroundColor: "#f00" })}>{children}</Box>
);

const baseArgs: Partial<ComponentProps<typeof HStack>> = {
    gap: "4px",
    children: [
        <StackItem key="foo">
            <Item>Foo</Item>
        </StackItem>,
        <StackItem key="bar">
            <Item>Bar</Item>
        </StackItem>,
    ],
};

export const base = {
    args: baseArgs,
};

const flexItemArgs: Partial<ComponentProps<typeof HStack>> = {
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
