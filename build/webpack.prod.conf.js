//webpack 发布配置项
const path = require('path'),                        //引入 nodejs 中的path模块
    utils = require('./utils'),                    
    webpack = require('webpack'),
    config = require('../config'),
    merge = require('webpack-merge'),
    pages = require('./entry.conf').entriesHtml,
    webpackBaseConfig = require('./webpack.base.conf'),
    webpackHtmlPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.build.env

//合并/覆盖base配置
const webpackConfig = merge(webpackBaseConfig, {
    //模块
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    //开发工具，使用 eval 过的 souremap 开发时速度更快
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].js'),     //[name].[chunkhash]
        chunkFilename: utils.assetsPath('js/[id].js')   //[id].[chunkhash]
    },
    //参见 http://vue-loader.vuejs.org/en/workflow/production.html
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
            //,sourceMap: true
        }),
        // 提取css到独立的文件中
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css'),   //[name].[contenthash:5]
            allChunks: true
        }),
        // 将 vendor js 分割到各自文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // 所有从 node_modules 引入的模块都会被合并到 vendor
                return (
                    module.resource && /\.js$/.test(module.resource) && (module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0 || module.resource.indexOf(path.join(__dirname, '../static')) === 0)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'iconfont',
            minChunks: function (module, count) {
                return (
                    module.resource && /\.js$/.test(module.resource) && module.resource.indexOf( path.join(__dirname, '../static/iconfont') ) === 0
                )
            }
        }),
        // 提取 webpack runtime 和 module manifest 到独立的文件，以避免
        // 在 bundle 更新后 vendor hash 被更新
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

// vue 多页面入口
Object.keys(pages).forEach(function (name) {
    var plugin = new webpackHtmlPlugin({
        filename: name + '.html',
        template: name + '.html',
        chunks: [name, 'iconfont', 'vendor', 'manifest'],
        inject: true,
        minify: {
        removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            //参见 https://github.com/kangax/html-minifier#options-quick-reference
        },
        chunksSortMode: 'dependency'
    })
    webpackConfig.plugins.push(plugin);
})

//gzip 压缩
if (config.build.productionGzip) {
    let CompressionWebpackPlugin=require('compression-webpack-plugin');
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