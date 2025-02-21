import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "@/components/home/AppHome.vue";
import store from "@/store";

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
    children: [
      {
        path: "order/:type", // 0是普通订单，1是秒杀订单
        name: "Order",
        component: () =>
          import(
            /* webpackChunkName: "order" */ "@/components/order/AppOrder.vue"
          ),
      },
    ],
    redirect: "/home/order/0",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/components/login/AppLogin.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 匹配所有未知路径
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue"),
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
