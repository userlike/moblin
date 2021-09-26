import { Align } from "./Box";

export function alignToFlex(x: Align): string {
  switch (x) {
    case "stretch":
      return "stretch";
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "end":
      return "flex-end";
  }
}
