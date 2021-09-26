import { css } from "@emotion/css";
import { Box } from "./Box";
import { WithChildren } from "./react";
import { ContentPosition, JustifyContent } from "./types";

export interface ScrollableProps extends WithChildren {
  direction?: "row" | "column";
  justifyContent?: ContentPosition;
}

export const Scrollable = ({
  children,
  direction = "column",
  justifyContent = "flex-start",
}: ScrollableProps): JSX.Element => (
  <div
    className={css`
      display: flex;
      overflow-x: ${direction === "row" ? "auto" : "hidden"};
      overflow-y: ${direction === "column" ? "auto" : "hidden"};

      flex-direction: ${direction};

      align-items: stretch;

      & > * {
        flex: ${justifyContent === "stretch" ? "1 0 auto" : "0 0 auto"};

        ${marginStartProp(direction)}: ${marginStart(justifyContent)};
        ${marginEndProp(direction)}: ${marginEnd(justifyContent)};
      }
    `}
  >
    {children}
  </div>
);

const marginStartProp = (direction: "row" | "column") =>
  direction === "row" ? "margin-left" : "margin-top";
const marginEndProp = (direction: "row" | "column") =>
  direction === "row" ? "margin-right" : "margin-bottom";

const marginStart = (justifyContent: ContentPosition) =>
  justifyContent === "stretch" || justifyContent === "flex-start"
    ? "0"
    : "auto";

const marginEnd = (justifyContent: ContentPosition) =>
  justifyContent === "stretch" || justifyContent === "flex-end" ? "0" : "auto";
