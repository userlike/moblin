import { LitElement } from "lit";
import type { AlignSelf } from "@moblin/core";
export declare class FlexItem extends LitElement {
    alignSelf?: AlignSelf;
    grow?: number;
    shrink: number;
    basis?: string;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
