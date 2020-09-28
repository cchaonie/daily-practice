const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV == "production";

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: isProd ? "production" : "development",
  // resolve: {
  //   extensions: ['js', 'jsx']
  // },
  devtool: isProd ? false : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        // include: path.join(__dirname, 'src'),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)/,
        exclude: path.join(__dirname, "node_modules"),
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: "file-loader?name=[hash:12].[ext]",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
    // new CopyWebpackPlugin([
    //   { from: path.join(__dirname, './src/assets'), to: path.join(__dirname, 'dist') }
    // ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    proxy: {
      "/api": {
        target: "http://localhost:8181",
        pathRewrite: { "^/api": "" },
      },
    },
  },
};