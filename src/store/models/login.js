import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
	state: {
		login: {}
	},
	mutations: {
		[USER_SIGNIN](state, action) {
			state.login = action.login;
		},
		[USER_SIGNOUT](state) {
			sessionStorage.removeItem('user')
			Object.keys(state).forEach(k => Vue.delete(state, k))
		}
	},
	actions: {
		saveSession: ({commit}, param) => {
			function setCookie(name, value, time) {
				document.cookie = name + "=" + escape(value) + ";";
				console.log(param.id, name+"="+escape(value)+";")
			}
			setCookie('sessionId', param.id, new Date().valueOf());
			commit('USER_SIGNIN',{login:true})
		}
	}
}