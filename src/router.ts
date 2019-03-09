import Vue from "vue";
import Router, { Route, RouteRecord } from "vue-router";
import LoginView from "./views/LoginView.vue";
import store from "@/store";

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
        import(/* webpackChunkName: "about" */ "./views/HomeView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/pantry",
      name: "pantry",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PantryView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/shoppingList",
      name: "shoppingList",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ShoppingListView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    { path: "*", redirect: "/" }
  ]
});

router.beforeEach((to: Route, from: Route, next) => {
  if (to.matched.some(  (record: RouteRecord) => record.meta.requiresAuth)) {
    if (!store.getters.tokenIsValid) {
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
