import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";
import { store } from "../store";
import { login } from "../services/userRepository";

jest.mock("../services/userRepository");

const user = {
  name: "Núria",
  avatar: "/nuria.png"
};

describe("When the user is not logged and clicks the login button", () => {
  it("should see their profile picture", async () => {
    login.mockResolvedValue(user);

    render(Login, {
      store
    });

    const loginButton = screen.getByRole("button", { name: /log in/i });
    userEvent.click(loginButton);

    expect(await screen.findByAltText(user.name)).toBeInTheDocument();
  });
});

describe("When the user is logged and clicks the logout button", () => {
  it("should not render their profile picture", async () => {
    render(Login, {
      store: {
        ...store,
        state: {
          user
        }
      }
    });

    const logoutButton = screen.getByRole("button", { name: /log out/i });
    userEvent.click(logoutButton);

    await waitForElementToBeRemoved(screen.queryByAltText(user.name));
  });
});
