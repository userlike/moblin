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
  alignContent: ContentPosition | ContentDistribution;
}

const indexer: CustomIndexer<Args> = {
  generateName({ direction, alignItems, justifyContent, alignContent }) {
    return `d=${direction[0]} a=${alignItems} j=${justifyContent} ac=${alignContent}`;
  },
  generateStories() {
    return (["column", "row"] as const).flatMap((direction) =>
      contentPositions.flatMap((alignItems) =>
        contentDistributions.flatMap((justifyContent) =>
          contentDistributions.map((alignContent) => ({
            direction,
            alignItems,
            justifyContent,
            alignContent,
          })),
        ),
      ),
    );
  },
};

export default indexer;
