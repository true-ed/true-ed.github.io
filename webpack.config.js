const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

let is_production = Boolean(process.env.production);

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: is_production ? `bundle-[chunkHash].js` : `bundle-[hash].js`,
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"],
          },
          // this applies to pug imports inside JavaScript
          {
            use: ["raw-loader", "pug-plain-loader"],
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Edward Prykhozhay",
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "./public/"),
    port: 9000,
  }
};
