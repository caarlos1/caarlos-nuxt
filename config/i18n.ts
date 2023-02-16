import ptBr from "@/locales/pt-br";
import en from "@/locales/en";

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
