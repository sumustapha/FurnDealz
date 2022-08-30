const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool:'inline-source-map',
  devServer:{
    static:path.resolve(__dirname, 'dist'),
    port:5501,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};