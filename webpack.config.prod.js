const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),

    new ExtractTextPlugin('styles.[chunkhash].css'),

    new FaviconsWebpackPlugin({
      logo: './components/bootstrap/images/favicon.png',
      inject: true
    })
  ]
});