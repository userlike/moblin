import { css, cx } from "@emotion/css";
import { WithChildren, WithClassName } from "./react";

export interface TextProps extends WithClassName, WithChildren {
  ellipsis?: boolean;
}

export const Text = ({ className, children, ellipsis }: TextProps) => (
  <div
    className={cx(
      css`
        display: inline-block;
        overflow: hidden;
      `,
      ellipsis &&
        css`
          white-space: nowrap;
          text-overflow: ellipsis;
        `,
      className
    )}
  >
    {children}
  </div>
);
