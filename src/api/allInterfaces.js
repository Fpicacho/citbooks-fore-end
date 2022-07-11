import fetch from "./fetch";

export default {
  // 网站信息
  WebInfo(params) {
    return fetch.get("/api/WebInfo", params);
  },
  // 首页轮播
  bannerList(params) {
    return fetch.get("/api/bannerListg", params);
  },
  // 单页:公司文化
  corporate(params) {
    return fetch.get("/api/paging/corporate", params);
  },
  // 单页:社会和党建责任
  responsibility(params) {
    return fetch.get("/api/paging/responsibility", params);
  },
  // 单页:原版图书进口
  original(params) {
    return fetch.get("/api/paging/original", params);
  },
  // 单页:电子资源进口
  electronics(params) {
    return fetch.get("/api/paging/electronics", params);
  },
  // 单页:报刊进口
  journal(params) {
    return fetch.get("/api/paging/journal", params);
  },
  // 单页:业务出口
  export(params) {
    return fetch.get("/api/paging/export", params);
  },
  // 单页:书展服务
  bookFair(params) {
    return fetch.get("/api/paging/bookFair", params);
  },
  // 单页:数据加工
  dataProcessing(params) {
    return fetch.get("/api/paging/data", params);
  },
  // 单页:专业研究
  professional(params) {
    return fetch.get("/api/paging/professional", params);
  },
  // 列表:招聘信息
  recruit(params) {
    return fetch.get("/api/list/recruit", params);
  },
  // 详情:招聘信息
  recruitContainer(params) {
    return fetch.get("/api/details/recruit", params);
  },
  // 列表:企业动态
  enterpriseList(params) {
    return fetch.get("/api/list/enterprise", params);
  },
  // 详情:文章详情
  enterpriseContainer(params) {
    return fetch.get("/api/details/enterprise", params);
  },
  // 列表:行业资讯
  industry(params) {
    return fetch.get("/api/list/industry", params);
  },
  // 列表:媒体资讯
  media(params) {
    return fetch.get("/api/list/media", params);
  },
  // 首页:视频列表
  video(params) {
    return fetch.get("/api/video", params);
  },
  // 首页:友情链接
  links(params) {
    return fetch.get("/api/list/link", params);
  },
  // 单页:企业介绍
  aboutus(params) {
    return fetch.get("/api/paging/aboutus", params);
  },
  // 列表:社会与党建责任
  news(params) {
    return fetch.get("/api/paging/news", params);
  },
};
