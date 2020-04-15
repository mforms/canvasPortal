const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const hmr = new webpack.HotModuleReplacementPlugin();
const PATHS = {
  src: path.join(__dirname, "src"),
  designSystemReact: path.join(
    __dirname,
    "node_modules",
    "@salesforce",
    "design-system-react"
  ),
  designSystemReactNodeModules: path.join(
    __dirname,
    "node_modules",
    "@salesforce",
    "design-system-react",
    "node_modules"
  ),
};
module.exports = {
  entry: {
    vendor: [
      // Required to support async/await
      "@babel/polyfill",
    ],
    main: ["./src/index.js"],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.bundle.js",
    path: __dirname + "/",
    publicPath: "/",
  },
  devServer: {
    host: "dev.mforms.app",
    contentBase: "./",
    hot: true,
    historyApiFallback: true,
    port: "443",
    https: {
      key: fs.readFileSync("../certs/archive/dev.mforms.app/privkey.pem"),
      cert: fs.readFileSync("../certs/archive/dev.mforms.app/fullchain.pem"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  },
  devtool: "inline-source-map",
  externals: {
    Sfdc: "Sfdc",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".jsx", ".json"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [PATHS.src, PATHS.designSystemReact],
        exclude: [PATHS.designSystemReactNodeModules],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    hmr,
    new HtmlWebpackPlugin({
      title: "Managed Forms",
      favicon: "favicon.ico",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
  ],
};
