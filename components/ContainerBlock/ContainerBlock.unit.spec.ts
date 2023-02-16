import { mount } from "@vue/test-utils";
import ContainerBlock from "./ContainerBlock.vue";

describe("ContainerBlock - unit", () => {
  it("should mount ContainerBlock", () => {
    const wrapper = mount(ContainerBlock);
    expect(wrapper.vm).toBeDefined();
  });
});
