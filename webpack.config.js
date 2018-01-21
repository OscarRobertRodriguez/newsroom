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
  module: {
    rules: [
      // look for all javascript files 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          // use babel so that es6 syntax can be used 
          loader: 'babel-loader',
          query: {
          presets: ['env']
          }
        }]

      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // look for all scss files 
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: [
            'css-loader',
            {
              // postcss-loader will add any css prefixes for other browsers
              // ex -ms-flexbox: flex; 
              loader: 'postcss-loader',
              options: {
                plugins: () => [require ('autoprefixer')]
              }},
              'sass-loader' 
          ]
        }))
      },
      // look for all image types 
      {
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // if images is less that 5kbs inline to reduce http request
              limit: 5000,
              // output path in the dist folder
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
      // look for font types
      {
        test: /\.(woff|woff2|eot|ttf)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      }

    
    ]
  },
  // begin plugins array
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HTMLWebpackPlugin({
      title: 'developerNews.io',
      template: path.resolve(__dirname, 'src/index.html') 
    }),
    new CleanWebpackPlugin(['dist'])
    
  ],
  //setup devserver
  devServer: {
    contentBase:        path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline:             true,
    open:               true,
    hot:            true,
    stats: 'errors-only',
    watchContentBase: true 
  } 


};

 
 

// ignore this block of code it will be only used in production 
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
      mangle: true
    }),
    new OptimizeCSSAssets()

  );
}