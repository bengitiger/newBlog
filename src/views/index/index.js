	import Vue from 'vue'
	import Vuex from 'vuex'
	import store from 'store'									//vuex store状态
	import VueRouter from 'vue-router'				//引入vue路由插件
	import VueCookie from 'vue-cookie'				//引入vue cookie
	import { sync } from 'vuex-router-sync'		//同步vuex与路由的状态
	import lazy from 'vue-lazy-component'			//引入组件懒加载
	import App from 'components/App.vue'

	const index = resolve => require(['views/index/index.vue'], resolve)
	const login = resolve => require(['views/login/login.vue'], resolve)
	const article = resolve => require(['views/article/article.vue'], resolve)
	const jslab = resolve => require(['views/index/jslab.vue'], resolve)
	const mobile = resolve => require(['views/index/mobile.vue'], resolve)

	Vue.use(VueRouter);					 	//注册VueRouter
	Vue.use(VueCookie);						//注册cookie
	Vue.use(lazy);

	//创建路由
	/*
	* @method 路由配置
	* @params 自动读写页面顶部的当前位置
	* 	rootName ： 根路由名称
	* 	rootNamePath ： 根路由路径
	* 	preName ： 二级路由名称
	* 	preNamePath ： 二级路由路径
	* 	curName ： 当前路由名称
	*/
	const router = new VueRouter({
		linkActiveClass:'active',
		mode : 'history',
		routes : [
			{
				path:'/blog',
				rootName: '首页',
				component:index
			},
			{
				path:'/blog/logined',
				rootName: '首页',
				component:index,
				meta: { requiresAuth: true }
			},{
				path:'/blog/login',
				component:login
			},{
				path:'/blog/article',
				rootName: '文章详情',
				rootNamePath: '/',
				component:article
			},{
				path:'/blog/jslab',
				component:jslab
			},{
				path:'/blog/mobile',
				component:mobile
			},{
				path:'/blog/*',
				component: require('components/404.vue')
			}
		]
	});

	router.beforeEach((to, from, next) => {
	  if (to.matched.some(record => record.meta.requiresAuth)) {
			const userSessionId=Vue.cookie.get('sessionId');
			if (!userSessionId) {
	      next({
	        path: '/blog/login',
	        query: { redirect: to.fullPath }
	      })
	    } else {
	      next()
	    }
	  } else {
	    next()
	  }
	})

	var app = new Vue({
	  el: '#app',
	  router,
	  store,
	  ...App
	});
