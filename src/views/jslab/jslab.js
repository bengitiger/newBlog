	import Vue from 'vue'
	import Vuex from 'vuex'
	import store from '~store'									//vuex store状态
	import VueRouter from 'vue-router'				//引入vue路由插件
	import VueCookie from 'vue-cookie'				//引入vue cookie
	import { sync } from 'vuex-router-sync'		//同步vuex与路由的状态
	import App from '~components/App.vue'

	const jslab = resolve => require(['~views/jslab/jslab.vue'], resolve)
	const ue = resolve => require(['~views/ueditor/ueditor.vue'], resolve)
	const nothing = resolve => require(['~components/404.vue'], resolve)

	Vue.use(VueRouter);					 	//注册VueRouter
	Vue.use(VueCookie);						//注册cookie


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
				path:'/jslab',
				component:jslab
			},{
				path:'/ue',
				component:ue
			},{
				path:'/*',
				component: nothing
			}
		]
	});

	router.beforeEach((to, from, next) => {
	  if (to.matched.some(record => record.meta.requiresAuth)) {
			const userSessionId=Vue.cookie.get('sessionId');
			if (!userSessionId) {
	      next({
	        path: rootPath+'/login',
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
	  el: '#jslab',
	  router,
	  store,
	  ...App
	});
