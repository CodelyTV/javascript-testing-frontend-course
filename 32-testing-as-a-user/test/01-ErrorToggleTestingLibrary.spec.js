import { fireEvent, render, screen } from "@testing-library/vue";
import ErrorToggle from "@/components/ErrorToggle.vue";

describe("Error Toggle", () => {
  it("should toggle contact message when button is clicked", async () => {
    render(ErrorToggle);

    const button = screen.getByRole("button", { name: /toggle/i });
    await fireEvent.click(button);

    const message = screen.getByRole("alert");
    expect(message).toBeTruthy();
    expect(message.innerHTML).toMatch(/contact us/i);

    await fireEvent.click(button);

    expect(screen.queryByRole("alert")).toBeFalsy();
  });
});
