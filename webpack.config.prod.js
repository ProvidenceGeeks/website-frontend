const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = webpackMerge(commonConfig, {

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),

    new FaviconsWebpackPlugin({
      logo: './components/bootstrap/images/pvd-geeks-logo.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'Providence Geeks',
      background: '#efefef',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),

    new ExtractTextPlugin('styles.[chunkhash].css'),

    // hack to get ES2015 support out of UglifyJS
    // https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/33#issuecomment-302969855
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
});