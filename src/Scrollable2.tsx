import { css } from "@emotion/css";
import { Box2 } from "./Box2";
import { WithChildren } from "./react";

export const VScrollable2 = ({ children }: WithChildren): JSX.Element => (
  <div
    className={css`
      dislay: flex;
      overflow-y: auto;

      flex-direction: column;

      align-items: stretch;
      justify-content: flex-start;

      & > * {
        flex: 1 0 auto;
      }
    `}
  >
    {children}
  </div>
);

export const HScrollable2 = ({ children }: WithChildren): JSX.Element => (
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
