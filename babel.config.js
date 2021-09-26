module.exports = {
    presets: [
        [
            "@babel/env",
            {
                useBuiltIns: false,
                modules: false,
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true,
            },
        ],
        "@babel/plugin-proposal-class-properties",
    ],
};
