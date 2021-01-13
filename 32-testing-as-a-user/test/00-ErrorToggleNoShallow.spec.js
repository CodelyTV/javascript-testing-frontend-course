import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import ErrorToggle from "@/components/ErrorToggle.vue";

describe("Error Toggle", () => {
  it("should toggle contact message when button is clicked", async () => {
    const wrapper = mount(ErrorToggle);
    const button = wrapper.find('[data-test-id="toggle-message"]');
    button.trigger("click");

    await nextTick();

    let message = wrapper.find('[data-test-id="message"]');
    expect(message.exists()).toBe(true);
    expect(message.text()).toMatch(/contact us/i);

    button.trigger("click");

    await nextTick();

    message = wrapper.find('[data-test-id="message"]');
    expect(message.exists()).toBe(false);
  });
});
