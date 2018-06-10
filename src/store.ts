import Vue from 'vue';
import Vuex from 'vuex';
import topSongs from '@/assets/api/TopSongs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topSongs: null
  },
  mutations: {
    setTopSongs(state, payload) {
      state.topSongs = payload;
    }
  },
  actions: {
    async setTopSongs({ commit }, payload) {
      const songs = await topSongs();
      commit('setTopSongs', songs);
    }
  },
  getters: {
    topSongs: state => state.topSongs
  }
});
