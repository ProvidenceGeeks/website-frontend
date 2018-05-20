const commonConfig = require('./webpack.config.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin(),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'bundle',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  module: {   
    rules: [{   
      test: /\.(s*)css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('stylelint')(),
              require('postcss-reporter')({ clearReportedMessages: true, throwError: true })
            ]
          }
        }
      ]
    }]
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
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: false
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
        sizes: [40, 48, 58, 60, 72, 80, 87, 120, 152, 180, 167, 512],
        ios: true
      }, {
        src: path.resolve('./src/components/bootstrap/images/pvd-geeks-logo.png'),
        size: 1024,
        ios: 'startup'
      }]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    new HtmlCriticalPlugin({
      base: path.resolve(__dirname, 'build'),
      src: 'index.html',
      dest: 'index.html',
      inline: true
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
});