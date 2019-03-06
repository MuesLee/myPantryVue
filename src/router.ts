import Vue from 'vue';
import Router from 'vue-router';
import LoginView from './views/LoginView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    { path: '*', redirect: '/' },
  ],
});
