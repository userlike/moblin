import { FlexDirection } from "./types.js";

export function unsafeCoerce<T>(x: unknown): T {
  return x as T;
}

declare const process: {
  env: {
    NODE_ENV: string | undefined;
  };
};

export const __DEV__ = process.env.NODE_ENV !== "production";

export function isHorizontal(direction: FlexDirection) {
  return direction === "row" || direction === "row-reverse";
}
export function isVertical(direction: FlexDirection) {
  return direction === "column" || direction === "column-reverse";
}
