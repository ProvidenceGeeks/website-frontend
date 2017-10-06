const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = webpackMerge(commonConfig, {

  output: {
    filename: '[name].bundle.js'
  },

  context: path.resolve(__dirname, 'src'),

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