import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid:""
  },
  mutations: {
    setSid (state,value) {
      state.sid = value
    }
  },
  actions: {
  },
  modules: {
  }
})
