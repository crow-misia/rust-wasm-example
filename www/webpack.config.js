const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "index.html" },
      ],
    }),
  ],
  experiments: {
    asyncWebAssembly: true, // deprecated, see https://github.com/webpack/webpack/issues/11347
  },
}
