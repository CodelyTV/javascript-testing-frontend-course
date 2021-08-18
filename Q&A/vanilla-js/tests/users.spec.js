// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

import { screen } from "@testing-library/dom";

import { printUsers } from "../src/index";

test("should render users in the document", async () => {
  const container = document.createElement("div");
  container.id = "users";

  document.body.appendChild(container);

  await printUsers();

  const user1 = screen.getByText("Javi");
  const user2 = screen.getByText("Núria");

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
});
