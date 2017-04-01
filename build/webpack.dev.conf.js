//webpack 开发配置项
const path = require('path'),						//引入 nodejs 中的path模块
	utils = require('./utils'),					
	webpack = require('webpack'),
	config = require('../config'),
	merge = require('webpack-merge'),
	webpackBaseConfig = require('./webpack.base.conf'),
	webpackHtmlPlugin = require('html-webpack-plugin')

const webpackConfig = merge(webpackBaseConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // 使用 eval 过的 souremap 开发时速度更快
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

// vue 多页面入口
Object.keys(webpackBaseConfig.entry).forEach(function (name) {
    webpackBaseConfig.entry[name] = ['./build/dev-client'].concat(webpackBaseConfig.entry[name])
    //多入口页面引用
    let plugin = new webpackHtmlPlugin({
        filename: name + '.html',
        template: name+'.html',
        // 自动将引用插入html
        inject: true,
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
})

module.exports = webpackConfig