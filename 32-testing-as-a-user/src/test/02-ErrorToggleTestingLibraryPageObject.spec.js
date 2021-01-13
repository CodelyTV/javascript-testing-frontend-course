import ErrorToggle from "@/components/ErrorToggle.vue";
import ErrorPageObject from "@/pageobjects/ErrorPageObject";

describe("Error Toggle", () => {
  it("should toggle contact message when button is clicked", async () => {
    const page = new ErrorPageObject(ErrorToggle);

    await page.clickToggleButton();

    expect(page.hasErrorMessage()).toBe(true);
    expect(page.errorMessageText()).toMatch(/contact us/i);

    await page.clickToggleButton();

    expect(page.hasErrorMessage()).toBe(false);
  });
});
