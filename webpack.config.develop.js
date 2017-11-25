const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {

  output: {
    filename: '[name].bundle.js'
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://stage.pvdgeeks.org',
        secure: false,
        changeOrigin: true
      }
    },
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