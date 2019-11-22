const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'C2LC-19'),
  },
  module:{
    rules: [
        {test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]},
        {test: /\.js$/ , exclude: '/node_modules/', use: { loader:'babel-loader', options: {presets: ['@babel/react'], "plugins": [
"@babel/plugin-proposal-class-properties"]}}},
        {test: /\.jsx$/, exclude: '/node_modules/', use: { loader:'babel-loader', options: {presets: ['@babel/react']}}}
    ]
  },
};
