import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "./test-utils";

import StateForm from "@/components/StateForm.vue";

describe("State form", () => {
  it("displays selected state", async () => {
    render(StateForm);

    userEvent.click(screen.getByLabelText("State"));
    
    await waitFor(() => {
      screen.getByRole("listbox");
    });

    userEvent.click(screen.getByText(/florida/i));

    await waitFor(() => {
      expect(screen.getByText("User is from Florida")).toBeTruthy();
    });
  });
});
