import Vue from 'vue'
import Vuex from 'vuex'
import showmsg from './models/showmsg'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		showmsg
	},
	actions
});