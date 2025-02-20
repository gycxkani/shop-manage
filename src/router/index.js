import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/AppLogin.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((from) => {
  let isLogin = store.getters.isLogin;
  if (isLogin || from.name === "Login") {
    return true;
  } else {
    return { name: "Login" };
  }
});

export default router;
