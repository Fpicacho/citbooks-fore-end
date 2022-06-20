import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    // 首页
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
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
    // 合作伙伴
    path: "/cooperate",
    name: "Cooperate",
    component: () => import("../views/Cooperate"),
  },
  {
    // 公司文化
    path: "/culture",
    name: "Culture",
    component: () => import("../views/Culture"),
  },
  {
    // 党建责任
    path: "/responsibility",
    name: "Responsibility",
    component: () => import("../views/Responsibility"),
  },
  {
    // 招聘信息
    path: "/recruitment",
    name: "Recruitment",
    component: () => import("../views/Recruitment"),
  },
  {
    // 原版图书进口
    path: "/bookImport",
    name: "BookImport",
    component: () => import("../views/BookImport"),
  },
  {
    // 电子资源进口
    path: "/electronicImport",
    name: "ElectronicImport",
    component: () => import("../views/ElectronicImport"),
  },
  {
    // 报刊进口
    path: "/newsImport",
    name: "NewsImport",
    component: () => import("../views/NewsImport"),
  },
  {
    // 出口业务
    path: "/exportBusiness",
    name: "ExportBusiness",
    component: () => import("../views/ExportBusiness"),
  },
  {
    // 书展服务
    path: "/bookFairServices",
    name: "BookFairServices",
    component: () => import("../views/BookFairServices"),
  },
  {
    // 数据加工
    path: "/dataProcessing",
    name: "DataProcessing",
    component: () => import("../views/DataProcessing"),
  },
  {
    // 专业研究
    path: "/professionalStudies",
    name: "ProfessionalStudies",
    component: () => import("../views/ProfessionalStudies"),
  },
  {
    // 媒体资讯列表
    path: "/enterpriseList",
    name: "EnterpriseList",
    component: () => import("../views/EnterpriseList"),
  },
  {
    //行业资讯列表
    path: "/industryList",
    name: "IndustryList",
    component: () => import("../views/IndustryList"),
  },
  {
    //媒体资讯列表
    path: "/mediaList",
    name: "MediaList",
    component: () => import("../views/MediaList"),
  },
  {
    // 文章详情
    path: "/articleDetails",
    name: "ArticleDetails",
    component: () => import("../views/ArticleDetails"),
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
