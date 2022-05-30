import { createStore } from "vuex";

export default createStore({
  state: {
    LanguageState: "cn",
  },
  getters: {},
  mutations: {
    ChangeLanguageState(state) {
      state.LanguageState = state.LanguageState === "cn" ? "en" : "cn";
      // console.log(1111);
    },
  },
  actions: {},
  modules: {},
});
