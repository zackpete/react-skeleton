module.exports = {
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

  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  entry: "./src/index.tsx",
  externals: { "react:": "React" },
  output: { filename: "bundle.js", path: require("path").resolve("./dist") },
};
