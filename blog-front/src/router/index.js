import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthRoutes from '../modules/auth/router';
import PostsRoutes from '../modules/post/router';

Vue.use(VueRouter);

const routes = [
  ...AuthRoutes,
  ...PostsRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
