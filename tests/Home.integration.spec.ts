import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import { i18nConfigTest } from "@/config/i18n";
import { createHead } from "@vueuse/head";

import Home from "@/pages/index/index.vue";
import ContainerHeader from "@/components/ContainerHeader";
import ContainerText from "@/components/ContainerText";

const i18n = createI18n(i18nConfigTest);

const mountHome = () => {
  return mount(Home, {
    global: {
      config: {},
      plugins: [i18n, createHead()],
    },
  });
};

describe("Home - integration", () => {
  it("should mount Home", () => {
    const wrapper = mountHome();
    expect(wrapper.vm).toBeDefined();
    expect(wrapper.findAllComponents(ContainerHeader)).toHaveLength(1);
    expect(wrapper.findAllComponents(ContainerText)).toHaveLength(1);
  });
});
