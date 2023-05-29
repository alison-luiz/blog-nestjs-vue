import BlogAPI from '@/api/axios';

export default {
  async register(payload) {
    return BlogAPI.post('/users', payload).then((response) => response);
  },
  async login(payload) {
    return BlogAPI.post('/login', payload).then((response) => response);
  },
};
