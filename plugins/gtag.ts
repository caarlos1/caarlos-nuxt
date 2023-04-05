import VueGtag from "vue-gtag-next";
import { GTAG } from "@/env";

export default defineNuxtPlugin(({ vueApp }) => {
  if (GTAG) vueApp.use(VueGtag, { property: { id: GTAG ? GTAG : "" } });
});
