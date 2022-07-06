import axios from "axios";
import qs from "qs";
let fetch = axios.create({
  timeout: 1000,
});
fetch.interceptors.request.use(
  function (config) {
    config.headers.common.language =
      window.localStorage.getItem("LanguageState");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
export default {
  get(url, params = {}) {
    return fetch({
      method: "get",
      url,
      params,
    });
  },
  // post请求在某些情况下可能需要携带额外的header
  post(url, params = {}, header) {
    if (header) {
      return fetch({
        method: "post",
        url,
        data: qs.stringify(params),
        headers: header,
      });
    } else {
      return fetch({
        method: "post",
        url,
        data: qs.stringify(params),
      });
    }
  },
  put(url, params = {}) {
    return fetch({
      method: "put",
      url,
      data: qs.stringify(params),
    });
  },
  delete(url, params = {}) {
    return fetch({
      method: "delete",
      url,
      params,
    });
  },
};
