import Vue from "vue";
import Router, { Route, RouteRecord } from "vue-router";
import LoginView from "./views/LoginView.vue";
import authService from "@/services/AuthService";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    { path: "*", redirect: "/" }
  ]
});

router.beforeEach((to: Route, from: Route, next) => {
  if (to.matched.some(  (record: RouteRecord) => record.meta.requiresAuth)) {
    if (!authService.userIsAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }
  else{
    next();
  }
});

export default router;
