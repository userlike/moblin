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
}

const indexer: CustomIndexer<Args> = {
  generateName({ direction, alignItems, justifyContent }) {
    return `d=${direction[0]} a=${alignItems} j=${justifyContent}`;
  },
  generateStories() {
    return (["column", "row"] as const).flatMap((direction) =>
      contentPositions.flatMap((alignItems) =>
        contentDistributions.map((justifyContent) => ({
          direction,
          alignItems,
          justifyContent,
        })),
      ),
    );
  },
};

export default indexer;
