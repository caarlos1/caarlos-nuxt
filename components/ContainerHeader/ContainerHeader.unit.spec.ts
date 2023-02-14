import { mount } from "@vue/test-utils";

import ContainerHeader from "./ContainerHeader.vue";

describe("ContainerHeader - unit", () => {
  it("should mount ContainerHeader", () => {
    const wrapper = mount(ContainerHeader);
    expect(wrapper.vm).toBeDefined();
  });
});
