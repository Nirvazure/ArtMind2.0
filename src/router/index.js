import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/core",
    name: "core",
    component: () => import("../views/Core.vue")
  },
  {
    path: "/core2",
    name: "core2",
    component: () => import("../views/Core2.vue")
  },
  {
    path: "/test",
    component: () => import("../views/Test2")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
