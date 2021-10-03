module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    features: {
        previewCsfV3: true,
    },
    // core: {
    //     builder: "webpack5",
    // },
};
