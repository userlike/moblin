import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ComponentProps, forwardRef } from "react";
import { WithChildren } from "./react";
import { AlignContent, AlignItems, AlignSelf, JustifyContent } from "./types";
import { unsafeCoerce } from "./utils";

export interface FlexItemProps extends WithChildren {
  alignSelf?: AlignSelf;
  grow?: number;
  shrink?: number;
  basis?: string;
}

export const FlexItem = styled.div<FlexItemProps>(
  ({ alignSelf, grow, shrink = 0, basis = "auto" }) => ({
    display: "flex",
    overflow: "hidden",
    alignItems: "stretch",
    flexDirection: unsafeCoerce("var(--pcss-flex-child-direction)"),
    flexGrow:
      grow !== undefined ? grow : unsafeCoerce("var(--pcss-flex-child-grow)"),
    flexShrink: shrink,
    flexBasis: basis,
    justifyContent: alignSelf ?? "var(--pcss-flex-align-items)",
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

export interface FlexProps {
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
  overflow: hidden;

  flex-direction: row;
  align-items: stretch;
`;

const FlexCore = styled("div", {
  shouldForwardProp: (prop) =>
    prop === "direction" ||
    prop === "gap" ||
    prop === "gapX" ||
    prop === "gapY" ||
    prop === "justifyContent" ||
    prop === "alignItems" ||
    prop === "alignContent" ||
    prop === "wrap"
      ? false
      : isPropValid(prop),
})<FlexProps>(
  ({
    direction,
    wrap = false,
    gap,
    gapX = gap,
    gapY = gap,
    alignItems = "stretch",
    justifyContent = "flex-start",
    alignContent = "flex-start",
  }) => ({
    "--pcss-flex-gap-x": gapX ?? "0",
    "--pcss-flex-gap-y": gapY ?? "0",
    "--pcss-flex-align-items": alignItems,
    "--pcss-flex-child-direction": direction === "row" ? "column" : "row",
    "--pcss-flex-child-grow": justifyContent === "stretch" ? "1" : "0",
    "--pcss-flex-grandchild-grow": alignItems === "stretch" ? "1" : "0",

    display: "flex",

    marginTop: "calc(var(--pcss-flex-gap-y) / -1)",
    marginLeft: "calc(var(--pcss-flex-gap-x) / -1)",
    overflow: "hidden",
    flexDirection: direction,
    flexWrap:
      wrap === true ? "wrap" : wrap === "reverse" ? "wrap-reverse" : "nowrap",
    flex: "1 1 auto",
    alignItems: "stretch",
    alignContent,
    justifyContent,
  })
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mkFlex<Tag extends keyof JSX.IntrinsicElements>(wrapper: Tag) {
  return forwardRef(function Flex(
    {
      children,
      direction,
      gap,
      gapX,
      gapY,
      justifyContent,
      alignItems,
      alignContent,
      wrap,
      className,
      ...divProps
    }: FlexProps & ComponentProps<Tag>,
    ref: ComponentProps<Tag>["ref"]
  ): JSX.Element {
    return (
      <FlexContainer
        as={wrapper}
        {...unsafeCoerce(divProps)}
        ref={unsafeCoerce(ref)}
        className={className}
      >
        <FlexCore
          direction={direction}
          gap={gap}
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
  });
}

export const Flex = mkFlex("div");
