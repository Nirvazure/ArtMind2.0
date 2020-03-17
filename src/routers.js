import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";

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
    component: () => import("@/views/Core.vue")
  },
  {
    path: "/painter",
    name: "painter",
    component: () => import("@/views/Painter")
  },
  {
    path: "/test",
    component: () => import("@/views/Test2")
  },
  {
    path: "/story",
    name: "story",
    component: () => import("@/views/Story")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
