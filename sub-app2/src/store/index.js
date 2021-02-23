import Vue from 'vue'
import Vuex from 'vuex'
import i18n from "@/assets/lang/index.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang:'zh'
  },
  mutations: {
    CHANGE_LANG: (state, lang = state.lang) => {
      state.lang = lang
      i18n.locale = lang;
    },
  },
  actions: {
    changeLang({ commit }, { lang }) {
      return commit('CHANGE_LANG', lang)
    },
  },
  modules: {
  }
})
