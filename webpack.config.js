const HTMLWebpackPlugin = require('html-webpack-plugin'),
  path                  = require('path'),
  ExtractTextPlugin     = require('extract-text-webpack-plugin'),
  webpack               = require('webpack'),
  UglifyJsPlugin        = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssets     = require('optimize-css-assets-webpack-plugin'),
  CleanWebpackPlugin    = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chunk.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      js:     path.resolve(__dirname, 'src/app/'),
      images: path.resolve(__dirname, 'src/assets/images'),
      icons:  path.resolve(__dirname, 'src/assets/images/icons'),
      styles: path.resolve(__dirname, 'src/assets/styles/')
    }
  },
  module: {
    rules: [
      
      {
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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require ('autoprefixer')]
              }},
              'sass-loader' 
          ]
        }))
      },
      {

      }

    
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HTMLWebpackPlugin({
      title: 'developerNews.io',
      template: path.resolve(__dirname, 'src/assets/index.html') 
    }),
    new CleanWebpackPlugin(['dist']) 
  ]


}