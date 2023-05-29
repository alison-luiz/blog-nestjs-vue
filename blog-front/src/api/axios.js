import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store';

const BlogAPI = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000,
});

BlogAPI.interceptors.request.use((config) => {
  const accessToken = store.state?.AuthStore?.auth?.access_token;
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default BlogAPI;
