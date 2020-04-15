const PATHS = require("./webpack.paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    js: {
        test: /\.jsx?$/,
        include: [PATHS.src, PATHS.designSystemReact],
        exclude: [PATHS.designSystemReactNodeModules],
        use: [
            {
                loader: "babel-loader",
            },
        ],
    },
    css: {
        all: {
            test: /\.(css|scss|sass)$/,
            use: [
                {
                    loader: "style-loader",
                    options: {},
                },
                {
                    loader: "css-loader",
                    options: {},
                },
            ],
        },
        usage: {
            test: /\.(css|scss|sass)$/,
            use: [
                {
                    loader: "style-loader",
                    options: {},
                },
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {},
                },
            ],
        },
    },
    fonts: {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
    },
};
