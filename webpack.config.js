const webpack = require('webpack');
const path = require('path');

module.exports = ({
  entry: path.resolve(process.cwd(), './client/js/app.js'),

  output: {
    path: './static/js',
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],

  devtool: 'inline-source-map',
  target: 'web',
  stats: false,
  progress: true,

  devServer: {
    hot: true,
    inline: true,
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
});
