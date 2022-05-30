import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import naive from "naive-ui";
import animated from "animate.css/animate.css";
import VueI18n from "./language";

router.afterEach(() => {
  window.scrollTo(0, 0);
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueI18n)
  .use(naive)
  .use(animated)
  .mount("#app");
