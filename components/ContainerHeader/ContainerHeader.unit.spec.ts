import { mount } from "@vue/test-utils";

import ContainerHeader from "./ContainerHeader.vue";

describe("ContainerHeader - unit", () => {
  it("should mount ContainerHeader", () => {
    const wrapper = mount(ContainerHeader);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render a default title with h2 when not provide props", () => {
    const wrapper = mount(ContainerHeader);
    expect(wrapper.text()).toContain("Title");
    expect(wrapper.findAll("h2")).toHaveLength(1);
  });

  it("should config component when provide all props", () => {
    const wrapper = mount(ContainerHeader, {
      props: { title: "Exemplo", titleIs: "h1", description: "Descrição" },
    });

    expect(wrapper.text()).toContain("Exemplo");
    expect(wrapper.text()).toContain("Descrição");
    expect(wrapper.findAll("h1")).toHaveLength(1);
  });
});
