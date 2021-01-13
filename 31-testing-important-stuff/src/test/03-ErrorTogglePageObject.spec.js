import { mount } from "@vue/test-utils";
import ErrorToggle from "@/components/ErrorToggle.vue";
import ErrorPageObject from "@/pageobjects/errorPageObject";

describe("Error Toggle", () => {
  it("should toggle contact message when button is clicked", async () => {
    const wrapper = mount(ErrorToggle);
    const page = new ErrorPageObject(wrapper);
    page.clickToggleButton();

    await page.wait();

    expect(page.hasErrorMessage()).toBe(true);
    expect(page.text()).toMatch(/contact us/i);

    page.clickToggleButton();

    await page.wait();

    expect(page.hasErrorMessage()).toBe(false);
  });
});
