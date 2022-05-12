import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "ch",
  legacy: false,
  messages: {
    globalInjection: true,
    ch: require("./ch.js"),
    en: require("./en.js"),
  },
});
export default i18n;
