var webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin')


module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.marko$/, loader: "marko-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      //exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true
    })
  ]
};
