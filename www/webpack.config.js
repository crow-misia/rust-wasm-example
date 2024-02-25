const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./bootstrap.js",
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './index.html' },
      ],
    })
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
