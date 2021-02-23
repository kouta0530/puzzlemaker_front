import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Index from "@/views/Index.vue";
import LoginPage from "@/views/LoginPage.vue";
import SelectPage from "@/views/SelectPage.vue";
import PlayPage from "@/views/PlayPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/select",
    name: "Select",
    component: SelectPage,
  },
  {
    path: "/play/:id",
    name: "play",
    component: PlayPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
