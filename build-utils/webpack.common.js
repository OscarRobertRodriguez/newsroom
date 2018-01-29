const commonPaths = require("./common-paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: [
          {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'assets/images/[name].[ext]'
          },
          
        },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
      ]
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
    new CleanWebpackPlugin(['dist'], { root: commonPaths.root })
  ]
};

module.exports = config; 