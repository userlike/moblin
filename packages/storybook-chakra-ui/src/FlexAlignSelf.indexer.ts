import {
  ContentDistribution,
  contentDistributions,
  ContentPosition,
  contentPositions,
} from "@moblin/core";
import type { CustomIndexer } from "@moblin/storybook-indexer";

interface Args {
  direction: "column" | "row";
  alignItems: ContentPosition;
  justifyContent: ContentPosition | ContentDistribution;
  alignSelf: ContentPosition;
}

const indexer: CustomIndexer<Args> = {
  generateName({ direction, alignItems, justifyContent, alignSelf }) {
    return `d=${direction[0]} a=${alignItems} j=${justifyContent} as=${alignSelf}`;
  },
  generateStories() {
    return (["column", "row"] as const).flatMap((direction) =>
      contentPositions.flatMap((alignItems) =>
        contentDistributions.flatMap((justifyContent) =>
          contentPositions.map((alignSelf) => ({
            direction,
            alignItems,
            justifyContent,
            alignSelf,
          })),
        ),
      ),
    );
  },
};

export default indexer;
