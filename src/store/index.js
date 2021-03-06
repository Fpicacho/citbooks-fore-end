import { createStore } from "vuex";

export default createStore({
  state: {
    LanguageState: "ch",
  },
  getters: {},
  mutations: {
    ChangeLanguageState(state) {
      state.LanguageState = state.LanguageState === "ch" ? "en" : "ch";
      window.localStorage.setItem("LanguageState", state.LanguageState);
    },
  },
  actions: {},
  modules: {},
});
