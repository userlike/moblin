import styled from "@emotion/styled";
import { WithChildren } from "./react";
import { ContentPosition } from "./types";

export interface ScrollableProps extends WithChildren {
  direction?: "row" | "column";
  justifyContent?: ContentPosition;
}

export const Scrollable = styled.div<ScrollableProps>(
  ({ direction = "column", justifyContent = "flex-start" }) => ({
    display: "flex",
    overflowX: direction === "row" ? "auto" : "hidden",
    overflowY: direction === "column" ? "auto" : "hidden",
    flexDirection: direction,
    alignItems: "stretch",
    "& > *": {
      flex: justifyContent === "stretch" ? "1 0 auto" : "0 0 auto",
      [marginStartProp(direction)]: marginStart(justifyContent),
      [marginEndProp(direction)]: marginEnd(justifyContent),
    },
  })
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
