//webpack 基础配置项
var path = require('path')						//引入 nodejs 中的path模块
var glob = require('glob')
var utils = require('./utils')
var config = require('../config')
var configs = require('../config/config.js')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entrys = getEntry("./src/views/**/*.js");		//获得入口js文件

function getEntry(globPath) {
  var entries = {}, basename, tmp;
	glob.sync(globPath).forEach(function (entry) {
		basename = path.basename(entry, path.extname(entry));
		entries[basename] = [];
		entries[basename].push(entry);
	});
	return entries;
}

module.exports = {
	//入口
	entry:entrys,
	//输出
	output : {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	//
	resolve:{
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, '../node_modules')],
		//路径别名
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'config': path.resolve(__dirname, "../config"),
			'js': path.resolve(__dirname, "../src/assets/js"),
			'sass': path.resolve(__dirname, "../src/assets/sass"),
			'components': path.resolve(__dirname, "../src/components"),
			'stores': path.resolve(__dirname, "../src/store/models"),
			'ui': path.resolve(__dirname, "../src/components/ui"),
			'plugin': path.resolve(__dirname, "../src/plugin"),
			'views': path.resolve(__dirname, "../src/views"),
			'utils': path.resolve(__dirname, "../src/utils"),
			'store': path.resolve(__dirname, "../src/store"),
			'dist': path.resolve(__dirname, "../dist")
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	//webpack模块
	module : {
		loaders : [{
			test: /\.vue$/,
			loader: 'vue'
		},{
			test: /\.js$/,
			exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'babel'
		},{
			test: /\.json$/,
			loader: 'json'
		},{
			test: /\.html$/,
			loader: 'vue-html'
		},{
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: utils.assetsPath('img/[name].[ext]')
			}
		},{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: utils.assetsPath('fonts/[name].[ext]')	//fonts/[name].[hash:7].[ext]
			}
		}]
	},
	/* 其他插件
	externals: {
	"BMap": "BMap"
	},*/
	vue : {
		loaders: utils.cssLoaders()
	}
}