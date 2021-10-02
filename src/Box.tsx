import { WithChildren, WithClassName } from "./react";
import { FlexItem, Flex, mkFlex } from "./Flex";
import { ContentPosition } from "./types";
import { DetailedHTMLProps, forwardRef, HTMLAttributes, Ref } from "react";
import { unsafeCoerce } from "./utils";

export interface BoxProps {
  valign?: ContentPosition;
  halign?: ContentPosition;
}

type ElementType<T> = T extends DetailedHTMLProps<infer R, any> ? R : never;

export function mkBox<Tag extends keyof JSX.IntrinsicElements>(
  wrapper: Tag,
  name?: string
) {
  const Flex = mkFlex(wrapper);
  const Component = forwardRef(function Box(
    {
      children,
      halign = "stretch",
      valign = "stretch",
      className,
      ...divProps
    }: BoxProps & HTMLAttributes<ElementType<Tag>>,
    ref: Ref<ElementType<Tag>>
  ): JSX.Element {
    return (
      <Flex
        {...unsafeCoerce(divProps)}
        ref={unsafeCoerce(ref)}
        direction="column"
        className={className}
        justifyContent={valign}
        alignItems={halign}
      >
        <FlexItem>{children}</FlexItem>
      </Flex>
    );
  });
  Component.displayName = name;
  return Component;
}

export const Box = mkBox("div");
