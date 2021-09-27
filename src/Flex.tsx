import styled from "@emotion/styled";
import { WithChildren, WithClassName } from "./react";
import { AlignContent, AlignItems, AlignSelf, JustifyContent } from "./types";

export interface FlexItemProps extends WithChildren {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: string;
}

export const FlexItem = styled.div<FlexItemProps>(
  ({ alignSelf, grow = 1, shrink = 1, basis = "auto" }) => ({
    display: "flex",
    overflow: "hidden",
    alignItems: "stretch",
    flexDirection: unsafeCoerce("var(--pcss-flex-child-direction)"),
    flex: `calc(${grow} * var(--pcss-flex-child-grow))
      calc(${shrink} * var(--pcss-flex-child-grow))
      ${basis}`,
    justifyContent: alignSelf ? alignSelf : "var(--pcss-flex-align-items)",
    marginLeft: "var(--pcss-flex-gap-x)",
    marginTop: "var(--pcss-flex-gap-y)",
    "& > *": {
      flexGrow:
        alignSelf === "stretch"
          ? 1
          : alignSelf !== undefined
          ? 0
          : unsafeCoerce("var(--pcss-flex-grandchild-grow)"),
      flexShrink: 1,
      flexBasis: "auto",
    },
  })
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
`;

const FlexCore = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) =>
    wrap === true ? "wrap" : wrap === "reverse" ? "wrap-reverse" : "nowrap"};
  overflow: hidden;

  flex: 1 1 auto;

  --pcss-flex-gap-x: ${({ gapX }) => gapX};
  --pcss-flex-gap-y: ${({ gapY }) => gapY};
  --pcss-flex-align-items: ${({ alignItems }) => alignItems};
  --pcss-flex-justify-content: ${({ justifyContent }) => justifyContent};
  --pcss-flex-child-direction: ${({ direction }) =>
    direction === "row" ? "column" : "row"};
  --pcss-flex-child-grow: ${({ justifyContent }) =>
    justifyContent === "stretch" ? "1" : "0"};
  --pcss-flex-child-shrink: ${({ wrap }) => (wrap ? "0" : "1")};
  --pcss-flex-grandchild-grow: ${({ alignItems }) =>
    alignItems === "stretch" ? "1" : "0"};

  margin-top: calc(var(--pcss-flex-gap-y) / -1);
  margin-left: calc(var(--pcss-flex-gap-x) / -1);

  align-items: stretch;
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

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
    <FlexContainer className={className}>
      <FlexCore
        direction={direction}
        gapX={gapX}
        gapY={gapY}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        wrap={wrap}
      >
        {children}
      </FlexCore>
    </FlexContainer>
  );
};

function unsafeCoerce<T>(x: unknown): T {
  return x as T;
}
