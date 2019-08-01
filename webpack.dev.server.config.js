const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index',
  devtool: 'inline-cheap-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'server_build')
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
