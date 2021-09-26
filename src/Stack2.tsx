import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";
import { Align } from "./types";
import { alignToFlex } from "./utils";

export interface FlexItemProps extends WithChildren {}

export const FlexItem = ({ children }: WithChildren): JSX.Element => (
  <div
    className={cx(
      css`
        display: flex;
        overflow: hidden;

        align-items: stretch;
      `
    )}
  >
    {children}
  </div>
);

export interface FlexProps extends WithChildren, WithClassName {
  direction: "vertical" | "horizontal";
  gap?: string;
  gapX?: string;
  gapY?: string;
  halign?: Align;
  valign?: Align;
  wrap?: true | "reverse";
}

export const Flex = ({
  children,
  direction,
  gap = "0",
  gapX = gap,
  gapY = gap,
  halign = direction === "vertical" ? "stretch" : "start",
  valign = direction === "vertical" ? "start" : "stretch",
  wrap,
  className,
}: FlexProps): JSX.Element => {
  const mainAlign = direction === "vertical" ? valign : halign;
  const crossAlign = direction === "vertical" ? halign : valign;

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
          flex-direction: ${direction === "vertical" ? "column" : "row"};
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

          justify-content: ${mainAlign === "stretch"
            ? "normal"
            : alignToFlex(mainAlign)};

          & > * {
            flex-direction: ${direction === "vertical" ? "row" : "column"};
            flex: ${mainAlign === "stretch" ? "1 1 auto" : "0 1 auto"};
            justify-content: ${crossAlign === "stretch"
              ? "normal"
              : alignToFlex(crossAlign)};

            margin-top: ${gapY};
            margin-left: ${gapX};
          }

          & > * > * {
            flex: ${crossAlign === "stretch" ? "1 1 auto" : "0 1 auto"};
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};
