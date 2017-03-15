
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import showmsg from './modules/showmsg'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        showmsg,
        login
    }
});