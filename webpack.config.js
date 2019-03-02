const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: ["src", "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.png",
    }),
  ],

  devtool: "source-map",
  externals: { "react:": "React" },
  output: { filename: "bundle.js", path: path.resolve("./dist") },
};