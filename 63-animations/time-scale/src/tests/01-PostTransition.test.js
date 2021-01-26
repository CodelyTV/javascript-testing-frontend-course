import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Post from "../components/PostTransition";

describe("Posts component", () => {
  describe("when user clicks the toggle button", () => {
    it("should toggle the post content", async () => {
      render(<Post />);

      const button = screen.getByRole("button", { name: /toggle/i });
      userEvent.click(button);

      await waitForElementToBeRemoved(
        screen.queryByRole("heading", { name: "A subtitle" })
      );
    });
  });
});
