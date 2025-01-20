import {
  ContentDistribution,
  ContentPosition,
  contentPositions,
} from "@moblin/core";
import type { CustomIndexer } from "@moblin/storybook-indexer";

interface Args {
  direction: "column" | "row";
  justifyContent: ContentPosition | ContentDistribution;
  overflow: boolean;
}

const indexer: CustomIndexer<Args> = {
  generateName({ direction, justifyContent, overflow }) {
    return `d=${direction[0]} ow=${overflow} j=${justifyContent}`;
  },
  generateStories() {
    return (["column", "row"] as const).flatMap((direction) =>
      [true, false].flatMap((overflow) =>
        contentPositions.flatMap((justifyContent) => ({
          direction,
          overflow,
          justifyContent,
        })),
      ),
    );
  },
};

export default indexer;
