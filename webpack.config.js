const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
        exclude: /(node_modules)/,
      },
    ],
  },
};
