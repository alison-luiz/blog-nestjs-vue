import BlogAPI from '@/api/axios';

export default {
  async getPosts() {
    return BlogAPI.get('/posts').then((response) => response.data);
  },
  async createPost(payload) {
    return BlogAPI.post('/posts', payload).then((response) => response.data);
  },
  async deletePost(id) {
    return BlogAPI.delete(`/posts/${id}`).then((response) => response);
  },
};
