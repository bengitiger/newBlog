import Vue from 'vue'
import Vuex from 'vuex'
import store from 'Vuex/store'						//vuex store状态
import VueRouter from 'vue-router'				//引入vue路由插件
import VueCookie from 'vue-cookie'				//引入vue cookie
import { sync } from 'vuex-router-sync'		//同步vuex与路由的状态
import lazy from 'vue-lazy-component'			//引入组件懒加载
import App from 'components/App.vue'			//引入根组件
import index from 'views/index/index.vue'
import login from 'views/login/login.vue'
import article from 'views/article/article.vue'

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
	mode: 'history',
	routes : [
		{
			path:'/',
			rootName: '首页',
			component:index,
		},{
			path:'/login',
			component:login,
		},{
			path:'/article',
			rootName: '文章详情',
			rootNamePath: '/',
			component:article
		},{
			path:'/jslab',
			component:require('views/index/jslab.vue')
		},{
			path:'/mobile',
			component:require('views/index/mobile.vue')
		},{
			path:'*',
			component: require('components/404.vue')
		}
	]
});

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});