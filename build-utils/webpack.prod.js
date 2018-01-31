const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              //postcss-loader to add prefixed styles for browser support
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true
    }),
    new OptimizeCssAssetsPlugin(),
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRation: 0.8
    })
  ]
};

module.exports = config;