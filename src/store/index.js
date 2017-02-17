import Vue from 'vue'
import Vuex from 'vuex'
import login from './models/login'
import showmsg from './models/showmsg'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		showmsg,
		login
	}
});