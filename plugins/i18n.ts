import { createI18n } from "vue-i18n";
import ptBr from "@/locales/pt-br.json";
import en from "@/locales/en.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "pt-br",
    messages: {
      "pt-br": ptBr,
      en: en,
    },
  });

  vueApp.use(i18n);
});
