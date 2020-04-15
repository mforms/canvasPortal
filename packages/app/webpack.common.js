const path = require("path");
module.exports = {
  entry: {
    vendor: ["@babel/polyfill"],
    main: ["./src/index.js"],
  },
  output: {
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[chunkhash].chunk.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  externals: {
    Sfdc: "Sfdc",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
};
