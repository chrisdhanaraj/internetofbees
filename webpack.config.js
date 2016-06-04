const webpack = require('webpack');
const path = require('path');

module.exports = ({
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(process.cwd(), './client/app.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
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
})
