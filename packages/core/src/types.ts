export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly";

export type ContentPosition = "center" | "flex-end" | "flex-start";

export type AlignContent = ContentDistribution | ContentPosition;

export type AlignItems = "stretch" | ContentPosition;

export type AlignSelf = "stretch" | ContentPosition;

export type JustifyContent = ContentDistribution | ContentPosition;

export const contentPositions: ContentPosition[] = [
  "flex-start",
  "center",
  "flex-end",
];

export const alignItems: AlignItems[] = ["stretch", ...contentPositions];

export const contentDistributions: ContentDistribution[] = [
  "space-around",
  "space-between",
  "space-evenly",
];

export const justifyContent: JustifyContent[] = [
  ...contentPositions,
  ...contentDistributions,
];

export const alignContent = [...contentPositions, ...contentDistributions];

export const alignSelf: AlignSelf[] = ["stretch", ...contentPositions];

export interface MoblinTheme {
  moblin?: {
    Scrollable?: {
      overflowType?: "normal" | "overlay";
    };
  };
}
