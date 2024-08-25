import {
  AlignContent,
  AlignItems,
  AlignSelf,
  JustifyContent,
} from "@moblin/core";
import { Box, Flex, FlexItem } from "@moblin/web";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["x-box"]: Omit<
        React.DetailedHTMLProps<React.HTMLAttributes<Box>, Box>,
        "className"
      > & {
        class?: string;
        valign?: AlignItems;
        halign?: AlignItems;
      };
      ["x-flex"]: Omit<
        React.DetailedHTMLProps<React.HTMLAttributes<Flex>, Flex>,
        "className"
      > & {
        class?: string;
        direction?: "row" | "column" | "row-reverse" | "column-reverse";
        gap?: string;
        "row-gap"?: string;
        "column-gap"?: string;
        "justify-content"?: JustifyContent;
        "align-items"?: AlignItems;
        "align-content"?: AlignContent;
        wrap?: boolean | "reverse";
      };
      ["x-flex-item"]: Omit<
        React.DetailedHTMLProps<React.HTMLAttributes<FlexItem>, FlexItem>,
        "className"
      > & {
        class?: string;
        "align-self"?: AlignSelf;
        grow?: number;
        shrink?: number;
        basis?: string;
      };
    }
  }
}

export * from "./Block";
export * from "./Box";
export * from "./Flex";
export * from "./List";
export * from "./react";
export * from "./Scrollable";
export * from "./Text";
export type {
  AlignContent,
  AlignItems,
  AlignSelf,
  ContentDistribution,
  ContentPosition,
  JustifyContent,
  MoblinTheme,
} from "@moblin/core";
