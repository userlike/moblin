const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
};
