import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    // 首页
    path: "/",
    name: "home",
    component: import("../views/HomeView.vue"),
  },
  {
    // 关于我们
    path: "/introduction",
    name: "introduction",
    component: () => import("../views/IntroductionView.vue"),
  },
  {
    // 组织结构
    path: "/organize",
    name: "organize",
    component: () => import("../views/OrganizeView"),
  },
  {
    // 404
    path: "/404",
    name: "404",
    component: () => import("../views/404"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
