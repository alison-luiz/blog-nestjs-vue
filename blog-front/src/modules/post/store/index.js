import PostService from '../service';

export default {
  namespaced: true,
  state: {
    posts: [],
  },

  getters: {
    getIndex: (state) => (id) => state.posts.findIndex((post) => post.id === id),
  },

  mutations: {
    // eslint-disable-next-line no-return-assign
    setPosts: (state, posts) => (state.posts = posts),
    addPost: (state, post) => state.posts.unshift(post),
    removePost: (state, index) => state.posts.splice(index, 1),
  },

  actions: {
    async getPosts({ commit }) {
      try {
        const posts = await PostService.getPosts();

        if (posts) {
          commit('setPosts', posts);
        }

        return posts;
      } catch (error) {
        return false;
      }
    },

    async createPost({ commit }, payload) {
      try {
        const post = await PostService.createPost(payload);

        if (post) {
          commit('addPost', post);
        }

        return post;
      } catch (error) {
        return false;
      }
    },

    async deletePost({ commit, getters }, id) {
      try {
        const response = await PostService.deletePost(id);

        if (response.status === 204) {
          const index = getters.getIndex(id);

          if (index > -1) {
            commit('removePost', index);
          }
        }
        return response;
      } catch (error) {
        return false;
      }
    },
  },
};
