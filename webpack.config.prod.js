const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

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

    new FaviconsWebpackPlugin({
      logo: './components/bootstrap/images/pvd-geeks-logo.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'Providence Geeks',
      background: '#bcbfc2',
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

    new WebpackPwaManifest({
      name: 'Providence Geeks',
      short_name: 'PVD Geeks', // eslint-disable-line camelcase
      start_url: '.', // eslint-disable-line camelcase
      inject: true,
      fingerprints: true,
      ios: true,
      background_color: '#bcbfc2', // eslint-disable-line camelcase
      theme_color: '#1a2930', // eslint-disable-line camelcase
      icons: [{
        src: path.resolve('./src/components/bootstrap/images/pvd-geeks-logo.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    }),

    new HtmlCriticalPlugin({
      base: path.resolve(__dirname, 'build'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false
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