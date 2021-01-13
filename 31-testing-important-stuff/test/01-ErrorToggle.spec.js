import { shallowMount } from "@vue/test-utils";
import ErrorToggle from "@/components/ErrorToggle.vue";

describe("Error Toggle", () => {
  it("should toggle open property when button is clicked", async () => {
    const wrapper = shallowMount(ErrorToggle);
    const button = wrapper.find("#toggle-message");

    button.trigger("click");
    expect(wrapper.vm.open).toBe(true);

    button.trigger("click");
    expect(wrapper.vm.open).toBe(false);
  });
});
