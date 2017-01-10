//webpack 开发配置项
var path = require('path')						//引入 nodejs 中的path模块
var utils = require('./utils')					
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.conf')
var webpackHtmlPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var Plugins = [
	new webpack.DefinePlugin({
		'process.env': config.dev.env
	}),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
]

// add hot-reload related code to entry chunks
Object.keys(webpackBaseConfig.entry).forEach(function (name) {
  webpackBaseConfig.entry[name] = ['./build/dev-client'].concat(webpackBaseConfig.entry[name])
  //多入口页面引用
   var plugin = new webpackHtmlPlugin({
      filename: name + '.html',
      template: name+'.html',
      // 自动将引用插入html
      inject: true,
      chunks: [name]
    });
    Plugins.push(plugin);
})

module.exports = merge(webpackBaseConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // 使用 eval 过的 souremap 开发时速度更快
  devtool: '#eval-source-map',
  plugins: Plugins
})
