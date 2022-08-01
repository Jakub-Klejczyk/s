const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: path.resolve(__dirname),
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

// entry: "./src/app.js",
//   output: {
//     filename: "prod.js",
//     path: resolve(__dirname, "resources"),
//   },
//   target: "node",
