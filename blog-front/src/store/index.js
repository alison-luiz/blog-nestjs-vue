import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import AuthStore from '../modules/auth/store';
import PostStore from '../modules/post/store';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'blog',
  storage: window.localStorage,
  reducer: (state) => ({
    AuthStore: state.AuthStore,
  }),
});

export default new Vuex.Store({
  modules: {
    AuthStore,
    PostStore,
  },
  plugins: [vuexLocal.plugin],
});
