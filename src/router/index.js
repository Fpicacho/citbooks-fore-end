import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: import("../views/HomeView.vue"),
  },
  {
    path: "/introduction",
    name: "introduction",
    component: () => import("../views/IntroductionView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
