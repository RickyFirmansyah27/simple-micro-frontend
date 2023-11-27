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
    port: 3001,
    historyApiFallback: {
      index: '/public/index.html'
    },
  },
  module: {
    rules: [{
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
      name: "shell_app",
      filename: "remoteEntry.js",
      remotes: {
        feature: "feature@https://simple-micro-frontend-menu.vercel.app/remoteEntry.js"
      }
    })
  ]
};
