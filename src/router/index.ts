import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../layouts/DashBoard.vue";
import positionRoutes from "./position/position-route";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      ...positionRoutes,
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active"
});

export default router;
