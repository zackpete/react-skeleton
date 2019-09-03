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
    ],
  },

  entry: "./src/generate.tsx",
  externals: { "react:": "React" },
  output: { filename: "bundle.js", path: require("path").resolve("./dist") },
};
