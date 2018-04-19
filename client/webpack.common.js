const path = require('path'); // Bring in the path module to manipulate file path
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Bring in htmlwebpack plugin


module.exports = {
  entry: './src/index.js', //src is where we want to put all our react stuff
  output: {
    path: path.resolve(__dirname, 'dist'), //Where we want our compiled code to go
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }, // Required for CSS loaders
      ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}