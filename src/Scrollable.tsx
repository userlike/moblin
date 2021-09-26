import { css } from "@emotion/css";
import { WithChildren } from "./react";

export const VScrollable = ({ children }: WithChildren): JSX.Element => (
    <div
        className={css`
            display: flex;
            overflow-y: auto;

            flex-direction: column;

            & > * {
                flex: 1 0 auto;
            }
        `}
    >
        {children}
    </div>
);

export const HScrollable = ({ children }: WithChildren): JSX.Element => (
    <div
        className={css`
            display: flex;
            overflow-x: auto;

            flex-direction: row;

            & > * {
                flex: 1 0 auto;
            }
        `}
    >
        {children}
    </div>
);
