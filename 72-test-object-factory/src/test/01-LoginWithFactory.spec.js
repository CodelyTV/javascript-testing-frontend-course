import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitForElementToBeRemoved } from "./test-utils";
import { generateUser } from "./factories/user";
import Login from "../components/Login";
import { login } from "../services/userRepository";

jest.mock("../services/userRepository");

describe("When the user is not logged and clicks the login button", () => {
  it("should see their profile picture", async () => {
    const user = generateUser();
    login.mockResolvedValue(user);

    render(Login);

    const loginButton = screen.getByRole("button", { name: /log in/i });
    userEvent.click(loginButton);

    expect(await screen.findByAltText(user.name)).toBeInTheDocument();
  });
});

describe("When the user is logged and clicks the logout button", () => {
  it("should not render their profile picture", async () => {
    const user = generateUser();

    render(Login, {
      initialState: {
        user
      }
    });

    const logoutButton = screen.getByRole("button", { name: /log out/i });
    userEvent.click(logoutButton);

    await waitForElementToBeRemoved(screen.queryByAltText(user.name));
  });
});
