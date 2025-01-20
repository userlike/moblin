import { ContentPosition, contentPositions } from "@moblin/core";
import type { CustomIndexer } from "@moblin/storybook-indexer";

interface Args {
  halign: ContentPosition;
  overflow: boolean;
}

const indexer: CustomIndexer<Args> = {
  generateName({ halign, overflow }) {
    return `h=${halign} ow=${overflow}`;
  },
  generateStories() {
    return [true, false].flatMap((overflow) =>
      contentPositions.map((halign) => ({
        halign,
        overflow,
      })),
    );
  },
};

export default indexer;
