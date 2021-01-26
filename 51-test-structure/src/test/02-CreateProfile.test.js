import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProfile from "../components/CreateProfile";
import { createUser } from "../services/userRepository";

jest.mock("../services/userRepository");

describe("CreateProfile component", () => {
  it("should display an error message when the user submits an invalid email", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();

    createUser.mockRestore();
  });

  it("should hide the error message when user corrects the email and submits again", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    userEvent.type(emailInput, "jane@example.com");
    userEvent.click(button);

    expect(screen.queryByText(/email is invalid/i)).not.toBeInTheDocument();

    createUser.mockRestore();
  });

  it("should display success message when the user submits the form successfully", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane@example.com");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();

    createUser.mockRestore();
  });
});
