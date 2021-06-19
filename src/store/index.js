import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    token: '',
    userinfo: {},
    islogin:''
  },
  mutations: {
    setSid (state,value) {
      state.sid = value
    },
    setUserInfo (state, value) {
      state.userinfo = value
    },
    setIsLogin (state, value) {
      state.islogin = value
    }
  },
  actions: {
  },
  modules: {
  }
})
