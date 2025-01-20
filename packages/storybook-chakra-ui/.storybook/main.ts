import type { StorybookConfig } from "@storybook/react-vite";
import { IndexerPlugin, createStoryIndexer } from "@moblin/storybook-indexer";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx", "../src/**/*.gen.tsx"],
  addons: [],
  framework: "@storybook/react-vite",
  experimental_indexers: async (existingIndexers) => [
    ...(existingIndexers ?? []),
    createStoryIndexer(),
  ],
  viteFinal: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(IndexerPlugin());
    return config;
  },
};

export default config;
