import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProfile from "../components/CreateProfile";
import { createUser } from "../services/userRepository";

jest.mock("../services/userRepository");

describe("CreateProfile component", () => {
  it("should display thank you message when user submits the form", async () => {
    createUser.mockImplementation(async (data) => await data);

    render(<CreateProfile />);

    const name = screen.getByText(/name/i);
    userEvent.type(name.nextSibling, "Jane");

    const email = screen.getByText(/email/i);
    userEvent.type(email.nextSibling, "jane@example.com");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();

    createUser.mockReset();
  });
});
