import { describe, it } from "vitest";
import { render } from "@testing-library/vue";

import { createI18n } from "vue-i18n";
import { i18nConfigTest } from "@/config/i18n";
import { createHead } from "@vueuse/head";

import Home from "@/pages/index/index.vue";

const i18n = createI18n(i18nConfigTest);

const renderHome = () => {
  return render(Home, {
    global: {
      plugins: [i18n, createHead()],
    },
  });
};

describe("Home - integration", () => {
  it("should mount Home", () => {
    const { findByTestId } = renderHome();

    findByTestId("header-container");
    findByTestId("text-container");
  });
});
