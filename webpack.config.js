var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader",
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                    },
                ],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
