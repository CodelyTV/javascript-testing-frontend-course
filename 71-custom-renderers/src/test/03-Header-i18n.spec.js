import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitForElementToBeRemoved } from "./test-utils";
import Header from "../components/Header";
import { login } from "../services/userRepository";

jest.mock("../services/userRepository");

const user = {
  name: "Núria",
  avatar: "/nuria.png"
};

describe("When the user is not logged and clicks the login button", () => {
  it("should see their profile picture", async () => {
    login.mockResolvedValue(user);

    render(Header);

    const loginButton = screen.getByRole("button", { name: /log in/i });
    userEvent.click(loginButton);

    expect(await screen.findByAltText(user.name)).toBeInTheDocument();
  });
});

describe("When the user is logged and clicks the logout button", () => {
  it("should not render their profile picture", async () => {
    render(Header, {
      initialState: {
        user
      }
    });

    const logoutButton = screen.getByRole("button", { name: /log out/i });
    userEvent.click(logoutButton);

    await waitForElementToBeRemoved(screen.queryByAltText(user.name));
  });
});
