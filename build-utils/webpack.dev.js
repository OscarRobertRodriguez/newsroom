const commonPaths = require("./common-paths");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

const config = {
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    },
    {
      test: /\.scss/,
      use: [
        'style-loader',
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
    }
    ]
  },
  plugins : [
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    open: true,
  }
};

module.exports = config;