import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProfile from "../components/CreateProfile";
import { createUser } from "../services/userRepository";

jest.mock("../services/userRepository");

describe("CreateProfile component", () => {
  it("should handle validation successfully", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();

    userEvent.type(emailInput, "jane@example.com");
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();

    createUser.mockReset();
  });
});
