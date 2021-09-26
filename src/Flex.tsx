import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";
import { AlignContent, AlignItems, AlignSelf, JustifyContent } from "./types";

export interface FlexItemProps extends WithChildren {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: string;
}

export const FlexItem = ({
  alignSelf,
  children,
  grow = 1,
  shrink = 1,
  basis = "auto",
}: FlexItemProps): JSX.Element => (
  <div
    className={css`
      display: flex;
      overflow: hidden;
      align-items: stretch;

      flex-direction: var(--pcss-flex-child-direction);
      flex: calc(${grow} * var(--pcss-flex-child-grow))
        calc(${shrink} * var(--pcss-flex-child-grow)) ${basis};
      justify-content: var(--pcss-flex-align-items);

      margin-left: var(--pcss-flex-gap-x);
      margin-top: var(--pcss-flex-gap-y);

      & > * {
        flex-grow: var(--pcss-flex-grandchild-grow);
        flex-shrink: 1;
        flex-basis: auto;
      }

      ${alignSelf &&
      css`
        justify-content: ${alignSelf};

        & > * {
          flex-grow: ${alignSelf === "stretch" ? "1" : "0"};
        }
      `}
    `}
  >
    {children}
  </div>
);

export interface FlexProps extends WithChildren, WithClassName {
  direction: "row" | "column";
  gap?: string;
  gapX?: string;
  gapY?: string;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  wrap?: boolean | "reverse";
}

export const Flex = ({
  children,
  direction,
  gap = "0",
  gapX = gap,
  gapY = gap,
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "flex-start",
  wrap = false,
  className,
}: FlexProps): JSX.Element => {
  return (
    <div
      className={cx(
        css`
          display: flex;
          flex-direction: row;
          align-items: stretch;
          overflow: hidden;
        `,
        className
      )}
    >
      <div
        className={css`
          display: flex;
          flex-direction: ${direction};
          flex-wrap: ${wrap === true
            ? "wrap"
            : wrap === "reverse"
            ? "wrap-reverse"
            : "nowrap"};
          overflow: hidden;

          flex: 1 1 auto;

          margin-top: calc(${gapY} / -1);
          margin-left: calc(${gapX} / -1);

          align-items: stretch;
          align-content: ${alignContent};
          justify-content: ${justifyContent};

          --pcsss-flex-direction: ${direction};
          --pcss-flex-wrap: ${wrap === true
            ? "wrap"
            : wrap === "reverse"
            ? "wrap-reverse"
            : "nowrap"};
          --pcss-flex-gap-x: ${gapX};
          --pcss-flex-gap-y: ${gapY};
          --pcss-flex-align-items: ${alignItems};
          --pcss-flex-justify-content: ${justifyContent};
          --pcss-flex-child-direction: ${direction === "row"
            ? "column"
            : "row"};
          --pcss-flex-child-grow: ${justifyContent === "stretch" ? "1" : "0"};
          --pcss-flex-child-shrink: ${wrap ? "0" : "1"};
          --pcss-flex-grandchild-grow: ${alignItems === "stretch" ? "1" : "0"};
        `}
      >
        {children}
      </div>
    </div>
  );
};
