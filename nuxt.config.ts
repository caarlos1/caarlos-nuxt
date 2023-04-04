import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/style/global.scss"],
  typescript: {
    shim: true,
    tsConfig: {
      compilerOptions: {
        types: ["jest"],
      },
    },
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-vitest"],
  components: false,
});
