const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    // path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    // rules: [{
    //   test: [/\.js?$/],
    //   exclude: /node_modules/,
    //   loader: 'babel-loader',
    //   query: {
    //     presets: ['@babel/env', '@babel/react']
    //   }
    // }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};
