import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";
import { AlignContent, AlignItems, AlignSelf, JustifyContent } from "./types";

export interface FlexItemProps extends WithChildren {
  alignSelf?: AlignSelf;
}

export const FlexItem = ({
  alignSelf,
  children,
}: FlexItemProps): JSX.Element => (
  <div
    className={css`
      display: flex;
      overflow: hidden;
      align-items: stretch;

      flex-direction: var(--pcss-flex-child-direction);
      flex: var(--pcss-flex-child-flex);
      justify-content: var(--pcss-flex-align-items);

      margin-left: var(--pcss-flex-gap-x);
      margin-top: var(--pcss-flex-gap-y);

      & > * {
        flex: var(--pcss-flex-grandchild-flex);
      }

      ${alignSelf &&
      css`
        justify-content: ${alignSelf};

        & > * {
          flex: ${alignSelf === "stretch" ? "1 1 auto" : "0 1 auto"};
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
  const shrink = wrap ? "0" : "1";

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
          --pcss-flex-child-shrink: ${shrink};
          --pcss-flex-child-flex: ${justifyContent === "stretch"
            ? `1 ${shrink} auto`
            : `0 ${shrink} auto`};
          --pcss-flex-grandchild-flex: ${alignItems === "stretch"
            ? "1 1 auto"
            : "0 1 auto"};
        `}
      >
        {children}
      </div>
    </div>
  );
};
