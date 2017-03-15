//webpack 发布配置项
var path = require('path')						//引入 nodejs 中的path模块
var utils = require('./utils')					
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.conf')
var webpackHtmlPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.build.env

//正式环境多入口打包
var Plugins = [
	new webpack.DefinePlugin({
		'process.env': env
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	// extract css into its own file
	new ExtractTextPlugin(utils.assetsPath('css/[name].css')),	//[name].[contenthash]
	// split vendor js into its own file
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: function (module, count) {
			// any required modules inside node_modules are extracted to vendor
			return (
				module.resource &&
				/\.js$/.test(module.resource) &&
				module.resource.indexOf(
					path.join(__dirname, '../node_modules')
				) === 0
			)
		}
	}),
	// extract webpack runtime and module manifest to its own file in order to
	// prevent vendor hash from being updated whenever app bundle is updated
	new webpack.optimize.CommonsChunkPlugin({
		name: 'manifest',
		chunks: ['vendor']
	})
]

// add hot-reload related code to entry chunks
Object.keys(webpackBaseConfig.entry).forEach(function (name) {
	var plugin = new webpackHtmlPlugin({
		filename: name + '.html',
		template: name + '.html',
		inject: true,
		chunks: [name, 'manifest', 'vendor'],
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		},
		chunksSortMode: 'dependency'
	})
	Plugins.push(plugin);
})

var webpackConfig = merge(webpackBaseConfig, {
	//模块
	module: {
		loaders: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true
		})
	},
	devtool: config.build.productionSourceMap ? '#source-map' : false,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].js'),	//[name].[chunkhash]
		chunkFilename: utils.assetsPath('js/[id].js')	//[id].[chunkhash]
	},
	vue: {
		loaders: utils.cssLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true
		})
	},
	plugins: Plugins
})

//gzip 判断
if (config.build.productionGzip) {
	var CompressionWebpackPlugin=require('compression-webpack-plugin');
	webpackConfig.plugins.push(
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
			threshold: 10240,
			minRatio: 0.8
		})
	)
}

module.exports = webpackConfig