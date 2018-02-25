const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './index.jsx',
    vendor: './vendor.js'
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    // TODO - https://github.com/webpack-contrib/eslint-loader/pull/212
    rules: [
      // {
      //   test: /\.(js*)x$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   exclude: path.join(__dirname, 'node_modules')
      // },
      {
        test: /\.(js*)x$/,
        loaders: [
          'babel-loader',
          'react-hot-loader/webpack'
        ],
        exclude: path.join(__dirname, 'node_modules')
      }, {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.ProvidePlugin({ // exposes non-modular vendor globals to webpack
      jQuery: 'jquery'
    })
  ]
};