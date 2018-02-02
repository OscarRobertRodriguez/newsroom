const commonPaths = require("./common-paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
  },
  module: {
    rules: [{
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'assets/images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'assets/fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.html$/,
        use: ['html-loader?attrs=img:src video:poster']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Course Tracker',
      template: commonPaths.indexPath
    }),
    new CleanWebpackPlugin(['dist'], {
      root: commonPaths.root
    })
  ]
};

module.exports = config;