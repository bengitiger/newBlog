var path = require('path')								//引入 nodejs 中的path模块
var http = require('http')								//引入 nodejs 中的http模块
var express=require('express')							//引入 nodejs 中的express模块
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
var opn = require('opn')

// 开发服务器默认访问端口
var port = process.env.PORT || config.dev.port
// 定义 HTTP 代理为自定义的后端 API
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable
var compiler = webpack(webpackConfig)
var app = express()

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler);
// 当 html-webpack-plugin 模版更新时强制重载页面
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit',
	function (data, cb) {
		hotMiddleware.publish({action: 'reload'});
		cb()
	})
})

// 代理 api 请求
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 纯静态资源服务器
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}
	var uri = 'http://localhost:' + port
	console.log('Listening at ' + uri + '\n')
	if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})