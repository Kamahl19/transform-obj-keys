/* global __dirname, require, module*/

const webpack = require('webpack');
const BabelEnginePlugin = require('babel-engine-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');

const outputFile = env === 'build' ? pkg.name + '.min.js' : pkg.name + '.js';

const plugins = [
  new BabelEnginePlugin({
    presets: ['env'],
    plugins: ['babel-plugin-add-module-exports', 'transform-runtime'],
  }),
];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  plugins,
};

module.exports = config;
