import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      id: -1,
      name: "",
      mail: "",
      lineid: ""
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
    }
  }
})

export default store