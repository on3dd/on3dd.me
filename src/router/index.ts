import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

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
    component: () => import(/* webpackChunkName: "home" */ '../views/Skills.vue'),
  },
  // {
  //   path: "*",
  //   name: "404",
  //   redirect: "/home"
  // }
];

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
}
