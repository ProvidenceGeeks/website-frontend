const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new WebpackMd5Hash(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});