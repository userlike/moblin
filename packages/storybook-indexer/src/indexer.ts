import path from "node:path";

import type { Indexer } from "@storybook/core/types";

import { CustomIndexer } from "./types.js";

export const createStoryIndexer = (): Indexer => ({
  test: /\.gen\.[jt]sx?$/,
  createIndex: async (fileName, { makeTitle }) => {
    // Check if there's a corresponding indexer file
    const storyName = path.basename(fileName).replace(/\.gen\.[tj]sx?$/, "");
    const indexerPath = fileName.replace(/\.gen\.[tj]sx?$/, ".indexer.ts");

    try {
      // Import the indexer configuration, using require because async imports
      // won't work in this specific context. Storybook probably uses something
      // like ts-node to run typescript files, which doesn't support async
      // imports?  Not sure.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const indexerModule: CustomIndexer<{}> = require(indexerPath).default;

      // Generate story entries based on the parameters
      const storyParams = indexerModule.generateStories();
      return storyParams.map((params, idx) => {
        return {
          type: "story" as const,
          title: makeTitle(storyName),
          importPath: fileName,
          exportName: `_${idx}`,
          name: indexerModule.generateName(params),
        };
      });
    } catch (e) {
      console.error("Error loading story indexer:", e);
      return [];
    }
  },
});
