import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    loading: false,
    matchedScenes: null,
    animeDetails: {
      trailerURL: null,
      title: {
        romaji: null,
        english: null
      },
      synopsis: null,
      image: null,
      genres: [],
      studios: []
    }

  },
  getters: {

    getLoadingState: state => state.loading,
    getMatchedScenes: state => state.matchedScenes,
    getAnimeDetails: state => state.animeDetails

  },
  mutations: {

    SET_MATCHED_SCENES: (state, payload) => {
      state.matchedScenes = payload
    },

    SET_ANIME_DETAILS: (state, payload) => {
      state.animeDetails.trailerURL = payload.data.trailer.embed_url
      state.animeDetails.title.romaji = payload.data.title
      state.animeDetails.title.english = payload.data.title_english
      state.animeDetails.synopsis = payload.data.synopsis
      state.animeDetails.image = payload.data.images.jpg.large_image_url

      payload.data.genres.forEach(genre => {
        state.animeDetails.genres.push(genre.name)
      });

      payload.data.studios.forEach(studio => {
        state.animeDetails.studios.push(studio.name)
      });
    },

    RESET_ANIME_DETAILS: state => {
      state.animeDetails.trailerURL = null
      state.animeDetails.title.romaji = null
      state.animeDetails.title.english = null
      state.animeDetails.synopsis = null
      state.animeDetails.image = null
      state.animeDetails.genres = []
      state.animeDetails.studios = []
    },

    SET_LOADING_STATE: state => state.loading = !state.loading

  },
  actions: {
    //fetch scenes from api with anilist info based on uploaded image
    fetchMatchScenes: async ({ commit }, payload) => {

      commit('SET_LOADING_STATE')

      const response = await fetch("https://api.trace.moe/search?anilistInfo", {
        method: "POST",
        body: payload,
      }).then(data => data.json())

      const matches = response.result

      commit('SET_LOADING_STATE')
      commit('SET_MATCHED_SCENES', matches)
    },

    fetchSceneDetails: async ({commit}, payload) => {

      commit('SET_LOADING_STATE')
      commit('RESET_ANIME_DETAILS')

      console.log('Fetch Scene Details');
      const response = await fetch('https://api.jikan.moe/v4/anime/' + payload + '/full')
      .then(data => data.json())

      commit('SET_LOADING_STATE')
      commit('SET_ANIME_DETAILS', response)

    }

  },
  modules: {
  }
})
