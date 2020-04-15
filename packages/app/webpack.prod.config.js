const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const PATHS = require("./webpack.paths");
const rules = require("./webpack.rules");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [rules.js, rules.css.usage, rules.fonts],
  },
  output: {
    publicPath: "https://cv.mforms.app/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Managed Forms",
      favicon: "favicon.ico",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgecssPlugin({
      paths: [
        ...glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        ...glob.sync(`${PATHS.designSystemReact}/components/**/*`, {
          nodir: true,
        }),
      ],
      whitelistPatterns: [/^slds-icon-/],
    }),
  ],
});
