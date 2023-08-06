import { __DEV__ } from "@moblin/core";
import { createElement, forwardRef, LegacyRef } from "react";

export type ReactifiedProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  "class"
> & {
  className?: string;
};

/**
 * Converts a custom element to a react component.
 */
export const reactify = <T extends keyof JSX.IntrinsicElements>(
  componentName: T,
  attrMap: Array<[string, string]> = []
) => {
  type ElementType = JSX.IntrinsicElements[T] extends {
    ref?: LegacyRef<infer R> | undefined;
  }
    ? R
    : unknown;

  type Props = JSX.IntrinsicElements[T];

  type XProps = Omit<Props, "class"> & {
    className?: string;
  };

  const Component = forwardRef<ElementType, XProps>(
    ({ className, children, ...rest }, ref) => {
      const dict = rest as any;
      for (const [from, to] of attrMap) {
        const value = dict[from];
        delete dict[from];
        dict[to] = value;
      }
      return createElement(
        componentName,
        {
          ref,
          class: className,
          ...dict,
        },
        children
      );
    }
  );

  if (__DEV__) {
    Component.displayName = `Reactified(${componentName})`;
  }

  return Component;
};
