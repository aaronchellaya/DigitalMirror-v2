import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggleNotification: false,
  },
  getters: {},
  mutations: {
    setNotification(state) {
      state.toggleNotification = !state.toggleNotification
    },
  },
  actions: {
    setNotification({ commit }) {
      commit('setNotification')
    },
  },
  modules: {},
})
