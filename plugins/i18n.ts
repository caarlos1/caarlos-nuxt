import { i18nConfig } from "@/config/i18n";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n(i18nConfig);
  vueApp.use(i18n);
});
