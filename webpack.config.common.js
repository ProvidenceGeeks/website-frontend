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
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
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
      name: 'common',
      filenames: ['common.js', 'vendor.js']
    }),

    new webpack.ProvidePlugin({ // exposes non-modular vendor globals to webpack
      jQuery: 'jquery'
    })
  ]
};