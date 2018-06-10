import Vue from 'vue';
import Vuex from 'vuex';
import topSongs from '@/assets/api/TopSongs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topSongs: null,
    song: null
  },
  mutations: {
    setTopSongs(state, payload) {
      state.topSongs = payload;
    },
    setSong(state, payload) {
      state.song = payload;
    }
  },
  actions: {
    async setTopSongs({ commit }, payload) {
      const songs = await topSongs();
      commit('setTopSongs', songs);
    },
    setSong({ commit }, song) {
      commit('setSong', song);
    }
  },
  getters: {
    topSongs: state => state.topSongs,
    song: state => {
      return state.song;
    }
  }
});
