import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () =>
      import(/* webpackChunkName: "skills" */ '../views/Skills.vue'),
  },
  {
    path: '*',
    name: '404',
    redirect: '/home',
  },
];

export default routes;
