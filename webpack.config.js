const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      DEV: JSON.stringify(true),
    }),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
    ],
  },
};
