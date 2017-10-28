const webpackMerge = require('webpack-merge');
const prodConfig = require('./webpack.config.prod');
const S3Plugin = require('webpack-s3-plugin');
const isProductionRelease = process.env.RELEASE_ENV === 'production';
const releaseConfig = {
  bucket: isProductionRelease ? 'pwww.pvdgeeks.org' : 'stage.pvdgeeks.org',
  cdnBase: isProductionRelease ? '//dt3s8ap74m6pw.cloudfront.net' : '//d2b64jbw6hxz4f.cloudfront.net',
  distributionId: isProductionRelease ? process.env.AWS_DISTRIBUTION_ID_PROD : process.env.AWS_DISTRIBUTION_ID_STAGE
};

module.exports = webpackMerge(prodConfig, {

  plugins: [

    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
      },
      s3UploadOptions: {
        Bucket: `${bucketBase}/${releaseConfig.bucket}`
      },
      cdnizerOptions: {
        defaultCDNBase: releaseConfig.cdnBase
      },
      cloudfrontInvalidateOptions: {
        DistributionId: releaseConfig.distributionId,
        Items: ['/index.html']
      }
    })

  ]
});