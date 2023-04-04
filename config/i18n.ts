import ptBr from "~/locales/ptBr.json";
import en from "~/locales/en.json";

export const i18nConfig = {
  warnHtmlMessage: false,
  legacy: false,
  globalInjection: true,
  locale: "pt-BR",
  messages: {
    "pt-BR": ptBr,
    en: en,
  },
};

export const i18nConfigTest = {
  ...i18nConfig,
  warnHtmlMessage: false,
};
