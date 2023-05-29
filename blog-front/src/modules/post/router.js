const routes = [
  {
    name: 'posts',
    path: '/',
    component: () => import('./views/Posts.vue'),
  },
];

export default routes;
