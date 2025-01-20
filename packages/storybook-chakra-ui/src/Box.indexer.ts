import { contentDistributions } from "@moblin/core";
import type { CustomIndexer } from "@moblin/storybook-indexer";

interface Args {
  valign: string;
  halign: string;
}

const indexer: CustomIndexer<Args> = {
  generateName(params: Args) {
    return `v=${params.valign} h=${params.halign}`;
  },
  generateStories() {
    return contentDistributions.flatMap((valign) =>
      contentDistributions.map((halign) => ({
        valign,
        halign,
      })),
    );
  },
};

export default indexer;
