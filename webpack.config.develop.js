const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: []
  },

  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    hot: false,
    inline: true,
    stats: {
      color: true
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});