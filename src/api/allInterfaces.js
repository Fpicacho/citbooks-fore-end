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
};
