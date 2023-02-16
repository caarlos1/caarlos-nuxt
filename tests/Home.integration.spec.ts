import { createI18n } from "vue-i18n";
import { mount } from "@vue/test-utils";
import { i18nConfigTest } from "@/config/i18n";
import Home from "@/pages/index/index.vue";

const i18n = createI18n(i18nConfigTest);

describe("Home - integration", () => {
  fit("should mount Home", () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [i18n],
      },
    });
    expect(wrapper.vm).toBeDefined();
  });
});
