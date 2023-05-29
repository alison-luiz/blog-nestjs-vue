const routes = [
  {
    name: 'register',
    path: '/register',
    component: () => import('./views/Register.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./views/Login.vue'),
  },
];

export default routes;
