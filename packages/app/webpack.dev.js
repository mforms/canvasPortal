const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const hmr = new webpack.HotModuleReplacementPlugin();
const rules = require("./webpack.rules");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "dev.tldis.icu",
    contentBase: "./",
    hot: true,
    historyApiFallback: true,
    port: "443",
    https: {
      key: fs.readFileSync("../certs/archive/dev.tldis.icu/privkey1.pem"),
      cert: fs.readFileSync("../certs/archive/dev.tldis.icu/fullchain1.pem"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  },
  module: {
    rules: [rules.js, rules.css.all, rules.fonts],
  },
  plugins: [
    hmr,
    new HtmlWebpackPlugin({
      title: "Demo",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
  ],
});
