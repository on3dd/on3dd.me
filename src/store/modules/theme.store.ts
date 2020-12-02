import { Commit } from 'vuex';
import { Theme } from '@client';

type ThemeState = {
  theme: Theme;
};

export default {
  state: {
    theme: localStorage.getItem('data-theme') || 'light',
  },

  actions: {
    async changeTheme({ commit }: { commit: Commit }, payload: Theme) {
      commit('updateTheme', payload);
    },
  },

  mutations: {
    updateTheme(state: ThemeState, theme: Theme) {
      state.theme = theme;
      localStorage.setItem('data-theme', theme);
    },
  },

  getters: {
    theme: (state: ThemeState) => state.theme,
  },
};
