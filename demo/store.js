import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quality: 720,
    current: 0
  },
  mutations: {
    setQuality (state, { quality, current }) {
      state.quality = quality
      state.current = current
    }
  },
  actions: {
    async ChangeQuality ({ commit }, { quality, current }) {
      commit('setQuality', { quality, current })
    }
  }
})
