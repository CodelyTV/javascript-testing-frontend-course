import { render, fireEvent, screen } from "@testing-library/vue";

export default class ErrorPageObject {
  constructor(component) {
    render(component);
  }

  hasErrorMessage() {
    return !!screen.queryByRole("alert");
  }

  errorMessageText() {
    return screen.getByRole("alert").innerHTML;
  }

  async clickToggleButton() {
    const button = screen.getByRole("button", { name: /toggle/i });
    await fireEvent.click(button);
  }
}
