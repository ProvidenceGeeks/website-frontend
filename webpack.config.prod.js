const commonConfig = require('./webpack.config.common');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  mode: 'production',

  // TODO - https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701
  // module: {
  //   rules: [
  //     {
  //       test: /\.(s*)css$/,
  //       use: ExtractTextPlugin.extract({
  //         use: ['css-loader', 'sass-loader']
  //       })
  //     }
  //   ]
  // },

  plugins: [

    // TODO - https://github.com/jantimon/favicons-webpack-plugin/issues/92
    // new FaviconsWebpackPlugin({
    //   logo: './components/bootstrap/images/pvd-geeks-logo.png',
    //   emitStats: true,
    //   prefix: 'icons/',
    //   statsFilename: 'icons/stats.json',
    //   inject: true,
    //   title: 'Providence Geeks',
    //   background: '#bcbfc2',
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: false,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: true,
    //     twitter: true,
    //     yandex: true,
    //     windows: true
    //   }
    // }),

    // TODO - https://github.com/arthurbergmz/webpack-pwa-manifest/issues/52
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

    // TODO - https://github.com/ProvidenceGeeks/website-frontend/pull/142
    // new HtmlCriticalPlugin({
    //   base: path.resolve(__dirname, 'build'),
    //   src: 'index.html',
    //   dest: 'index.html',
    //   inline: true,
    //   minify: true,
    //   extract: true,
    //   width: 375,
    //   height: 565,
    //   penthouse: {
    //     blockJSRequests: false
    //   }
    // }),

    // new ExtractTextPlugin('styles.[chunkhash].css'),

    // TODO - https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/34
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),

    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});