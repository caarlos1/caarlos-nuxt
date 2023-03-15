import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderContainer from "./HeaderContainer.vue";

describe("HeaderContainer - unit", () => {
  it("should mount HeaderContainer", () => {
    const wrapper = mount(HeaderContainer);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render a default title with h2 when not provide props", () => {
    const wrapper = mount(HeaderContainer);
    expect(wrapper.text()).toContain("Title");
    expect(wrapper.findAll("h2")).toHaveLength(1);
  });

  it("should config component when provide all props", () => {
    const wrapper = mount(HeaderContainer, {
      props: { title: "Exemplo", titleIs: "h1", description: "Descrição" },
    });

    expect(wrapper.text()).toContain("Exemplo");
    expect(wrapper.text()).toContain("Descrição");
    expect(wrapper.findAll("h1")).toHaveLength(1);
  });
});
