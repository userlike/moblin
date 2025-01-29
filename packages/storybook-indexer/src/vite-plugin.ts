import { Plugin } from "vite";

import { CustomIndexer } from "./types.js";

export function IndexerPlugin(): Plugin {
  return {
    name: "story-generator",
    async transform(code, id) {
      if (!/\.gen\.[jt]sx?$/.test(id)) return;
      console.log("vite plugin", id);

      // Get the indexer file path
      const indexerPath = id.replace(/\.gen\.[jt]sx?$/, ".indexer.ts");

      try {
        // Import the indexer configuration
        const indexerModule: CustomIndexer<unknown> =
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          require(indexerPath).default;

        // Generate story exports for each parameter combination
        const storyParams = indexerModule.generateStories();
        const storyExports = storyParams
          .map((params, idx) => {
            const name = indexerModule.generateName(params);

            return `
            export const _${idx} = {
              name: ${JSON.stringify(name)},
              args: ${JSON.stringify(params)},
            };
          `;
          })
          .join("\n");

        // Append the generated exports to the original file
        return `${code}\n${storyExports}`;
      } catch (e) {
        console.error("Error generating stories:", e);
        return code;
      }
    },
  };
}
