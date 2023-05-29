import AuthService from '../service';

export default {
  namespaced: true,
  state: {
    auth: {
      access_token: null,
      user: null,
    },
  },

  mutations: {
    // eslint-disable-next-line no-return-assign
    setAuth: (state, payload) => (state.auth = payload),
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const response = await AuthService.login(payload);

        if (response.status === 200) {
          commit('setAuth', response.data);
          return { status: 'ok' };
        }

        return false;
      } catch (error) {
        return false;
      }
    },
  },
};
