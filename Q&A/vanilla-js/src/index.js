import "./assets/css/normalize.css";

import { getUsers } from "./users";

export async function printUsers() {
  const users = await getUsers();
  const element = document.getElementById("users");
  element.innerHTML = users.map((user) => `<div>${user.name}</div>`).join("");
}
