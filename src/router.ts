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
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    { path: '*', redirect: '/' },
  ],
});
