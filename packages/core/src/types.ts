export type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type ContentPosition = 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type AlignContent = ContentDistribution | ContentPosition;

export type AlignItems = ContentPosition;

export type AlignSelf = ContentPosition;

export type JustifyContent = ContentDistribution | ContentPosition;

export const contentPositions: ContentPosition[] = [
  'stretch',
  'flex-start',
  'center',
  'flex-end',
];

export const contentDistributions: (ContentPosition | ContentDistribution)[] = [
  ...contentPositions,
  'space-around',
  'space-between',
  'space-evenly',
];
