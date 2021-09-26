import { WithChildren, WithClassName } from "./react";

import { BaseBox } from "./Box";
import { HScrollable, VScrollable } from "./Scrollable";
import { css, cx } from "@emotion/css";

const item = css`
    & > * {
        flex: 1 1 auto;
    }
`;

export const StackItem = ({ children }: WithChildren): JSX.Element => (
    <BaseBox className={cx(item, "stack-item")}>{children}</BaseBox>
);

export const FlexItem = ({ children }: WithChildren): JSX.Element => (
    <BaseBox className={cx(item, "flex-item")}>{children}</BaseBox>
);

const Stack = ({
    children,
    className,
    gap,
}: { gap?: string } & WithChildren & WithClassName): JSX.Element => (
    <div
        className={cx(
            css`
                display: flex;

                overflow: hidden;

                & > .${item}.stack-item {
                    flex: 0 0 auto;
                }

                & > .${item}.flex-item {
                    flex: 1 1 0%;
                }
            `,
            gap &&
                css`
                    margin: -${gap} 0 0 -${gap};
                    & > * {
                        margin: ${gap} 0 0 ${gap};
                    }
                `,
            className
        )}
    >
        {children}
    </div>
);

export const VStack = ({
    gap,
    children,
    className,
}: { gap?: string } & WithChildren & WithClassName): JSX.Element => (
    <Stack
        gap={gap}
        className={cx(
            css`
                flex-direction: column;
            `,
            className
        )}
    >
        {children}
    </Stack>
);

export const HStack = ({
    gap,
    children,
    className,
}: { gap?: string } & WithChildren & WithClassName): JSX.Element => (
    <Stack
        gap={gap}
        className={cx(
            css`
                flex-direction: row;
            `,
            className
        )}
    >
        {children}
    </Stack>
);

export const VList = ({ children }: WithChildren): JSX.Element => (
    <VScrollable>
        <VStack>{children}</VStack>
    </VScrollable>
);

export const HList = ({ children }: WithChildren): JSX.Element => (
    <HScrollable>
        <HStack>{children}</HStack>
    </HScrollable>
);
