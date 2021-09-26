import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";

export type Align = "stretch" | "start" | "center" | "end";

export const BaseBox = ({
    children,
    className,
}: WithChildren & WithClassName): JSX.Element => (
    <div
        className={cx(
            css`
                display: flex;
                overflow: hidden;
            `,
            className
        )}
    >
        {children}
    </div>
);

export interface BoxProps {
    valign?: Align;
    halign?: Align;
}

export const Box = ({
    children,
    halign = "stretch",
    valign = "stretch",
    className,
}: BoxProps & WithChildren & WithClassName): JSX.Element => (
    <div
        className={cx(
            css`
                display: flex;
                overflow: hidden;

                flex-direction: column;

                justify-content: flex-start;
                align-items: ${alignToFlex(halign)};

                ${valign === "stretch"
                    ? css`
                          & > * {
                              flex: 1 1 auto;
                          }
                      `
                    : css`
                          justify-content: ${alignToFlex(valign)};
                      `};
            `,
            className
        )}
    >
        {children}
    </div>
);

function alignToFlex(x: Align): string {
    switch (x) {
        case "stretch":
            return "stretch";
        case "start":
            return "flex-start";
        case "center":
            return "center";
        case "end":
            return "flex-end";
    }
}
