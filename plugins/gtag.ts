import VueGtag from "vue-gtag-next";

const GTAG = import.meta.env.VITE_GTAG?.toString();

export default defineNuxtPlugin(({ vueApp }) => {
  if (GTAG) vueApp.use(VueGtag, { property: { id: GTAG } });
});
