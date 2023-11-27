const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "feature",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./App": "./src/App",
        "./Menu": "./src/Menu",
        "./Feature1": "./src/Feature1",
        "./Feature2": "./src/Feature2",
        "./Feature3": "./src/Feature3"
      },
      shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
    })
  ]
};