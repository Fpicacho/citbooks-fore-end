import fetch from "./fetch";

export default {
  // 测试
  test1(params) {
    return fetch.post("http://jsonplaceholder.typicode.com/posts", params);
  },
};
