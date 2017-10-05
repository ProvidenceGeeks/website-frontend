const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './index.js',
    vendor: './vendor.js'
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  context: path.resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'react-hot-loader/webpack',
        exclude: path.join(__dirname, 'node_modules')
      },
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
    new HtmlWebpackPlugin(
      {
        template: './index.html',
        chunksSortMode: 'dependency'
      }
    ),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'common'],
      filenames: ['common.js', 'vendor.js'],
      minChunks: Infinity
    }),

    new webpack.ProvidePlugin({ // exposes non-modular vendor globals to webpack
      jQuery: 'jquery'
    })
  ]
};