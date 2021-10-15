import { LitElement } from "lit";
import type { AlignContent, AlignItems, JustifyContent } from "@moblin/core";
export declare class Flex extends LitElement {
    direction: "row" | "column";
    gap: string;
    gapX?: string;
    gapY?: string;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
    alignContent: AlignContent;
    wrap: boolean | "reverse";
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
