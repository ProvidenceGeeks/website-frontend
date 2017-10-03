const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    sourceMapFilename: '[name].map'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'babel-preset-env',
            'react'
          ]
        },
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};