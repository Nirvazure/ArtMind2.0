import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/analyse",
    name: "analyse",
    component: () => import("@/views/Analyse.vue"),
  },
  {
    path: "/painter",
    name: "painter",
    component: () => import("@/views/Painter"),
  },
  {
    path: "/test",
    component: () => import("@/views/Craft"),
  },
  {
    path: "/mentor",
    component: () => import("@/views/Mentor2"),
  },
  {
    path: "/student",
    component: () => import("@/views/Student"),
    redirect: "/student/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Student/Home"),
      },
      {
        path: "history",
        name: "history",
        component: () => import("@/views/Student/History"),
      },
    ],
  },
  {
    path: "/platform",
    component: () => import("@/views/Platform"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
