import { describe, it, expect } from "vitest";

import { render } from "@testing-library/vue";
import BlockContainer from "./BlockContainer.vue";

describe("BlockContainer - unit", () => {
  it("should mount BlockContainer", () => {
    const { getByText } = render(BlockContainer, {
      slots: { default: "<p>Hi!</p>" },
    });

    getByText("Hi!");
  });
});
