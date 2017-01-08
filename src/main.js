import Vue from 'vue'
import Vuex from 'vuex'
import store from 'vueX/store'						//vuex store状态
import VueRouter from 'vue-router'				//引入vue路由插件
import VueCookie from 'vue-cookie'				//引入vue cookie
import { sync } from 'vuex-router-sync'		//同步vuex与路由的状态
import lazy from 'vue-lazy-component'			//引入组件懒加载
import App from './App.vue'								//引入根组件

Vue.use(VueRouter);					 	//注册VueRouter
Vue.use(VueCookie);						//注册cookie
Vue.use(lazy);								//注册lazy

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
	routes:[{
			path:'/',
			component:require('Views/index/index.vue'),
			meta: {
				name: 'index',
				requiresAuth: true
			}
		},/*{
			path:'/login',
			name: 'login',
			component:require('components/login.vue'),
			auth: true
		},{
			path:'/password',
			name: 'password',
			component:require('components/password.vue'),
			auth: false
		},{
			path:'/noticelist',
			rootName: '首页',
			rootNamePath: '/index.html',
			curName: '公告列表',
			component:require('Views/index/view/noticelist.vue'),
			auth: true
		},{
			path:'noticelist/:id',
			rootName: '首页',
			rootNamePath: '/index.html',
			preName:'公告列表',
			preNamePath:'/#!/noticelist',
			curName: '详情',
			component:require('Views/index/view/noticeShow.vue'),
			auth: true
		},*/{
			path:'*',
			component: require('Views/404.vue')
		}
	]
});

sync(store, router)



new Vue({
	el: '#app',
	components: {
		'my-component': Favlist
	}
});