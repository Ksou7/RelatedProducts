const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/client",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js",
  },
};
