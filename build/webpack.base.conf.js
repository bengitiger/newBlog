//webpack 基础配置项
const path = require('path'),						//引入 nodejs 中的path模块
	glob = require('glob'),
	utils = require('./utils'),
	config = require('../config'),
	configs = require('../config/config.js'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	entries = getEntry("./src/views/**/*.js"),		//获得入口js文件
	env = process.env.NODE_ENV,
	vueLoaderConfig = require('./vue-loader.conf'),
	cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap),
	cssSourceMapProd = (env === 'production' && config.build.productionSourceMap),
	useCssSourceMap = cssSourceMapDev || cssSourceMapProd,

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
	entry:entries,
	//输出
	output : {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	resolve:{
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, '../node_modules')],
		//路径别名
		alias: {
			'~src': path.resolve(__dirname, '../src'),
			'~config': path.resolve(__dirname, "../config"),
			'~static': path.resolve(__dirname, '../static'),
			'~assets': path.resolve(__dirname, "../src/assets"),
			'~js': path.resolve(__dirname, "../src/assets/js"),
			'~sass': path.resolve(__dirname, "../src/assets/sass"),
			'~components': path.resolve(__dirname, "../src/components"),
			'~modules': path.resolve(__dirname, "../src/vuex/modules"),
			'~ui': path.resolve(__dirname, "../src/components/ui"),
			'~plugin': path.resolve(__dirname, "../src/plugin"),
			'~views': path.resolve(__dirname, "../src/views"),
			'~utils': path.resolve(__dirname, "../src/utils"),
			'~store': path.resolve(__dirname, "../src/vuex"),
			'~dist': path.resolve(__dirname, "../dist")
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	//webpack模块
	module : {
		loaders : [{
			test: /\.vue$/,
			exclude: [
				path.resolve(__dirname, "node_modules"),
				path.resolve(__dirname, "static")
			],
			loader: 'vue',
        		options: vueLoaderConfig
		},{
			test: /\.js$/,
			exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'babel'
		},{
			test: /\.json$/,
			exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'json'
		},{
			test: /\.html$/,
			exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'vue-html'
		},{
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'url',
			query: {
				limit: 5000,
				name: utils.assetsPath('img/[name].[ext]')
			}
		},{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
			loader: 'url',
			query: {
				limit: 10000,
				name: utils.assetsPath('fonts/[name].[ext]')	//fonts/[name].[hash:7].[ext]
			}
		}]
	},
	/* 其他插件 */
	externals: {
		"UE": "window.UE"
	}
}