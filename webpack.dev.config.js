const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
