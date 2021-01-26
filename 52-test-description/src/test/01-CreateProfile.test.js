import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProfile from "../components/CreateProfile";
import { createUser } from "../services/userRepository";

jest.mock("../services/userRepository");

describe("CreateProfile component", () => {
  it("should display thank you message when user submits the form successfully", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane@example.com");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();

    createUser.mockReset();
  });

  it("should display error message when submission fails", async () => {
    createUser.mockRejectedValue();

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane@example.com");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/There was an error/i)).toBeInTheDocument();

    createUser.mockReset();
  });
});
