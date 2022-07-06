import fetch from "./fetch";

export default {
  // 测试
  test1(params) {
    return fetch.get("/api/comments", params);
  },
};
