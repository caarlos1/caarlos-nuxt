import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/sheets/reset.scss", "@/assets/sheets/fonts.scss", "@/assets/sheets/global.scss"],
  typescript: {
    shim: false,
  },
  storybook: {
    // No suport for Nuxt 3
  }
});
