import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import CreateProfile from "../components/CreateProfile";

expect.extend(toHaveNoViolations);

describe("CreateProfile component", () => {
  it("should be accessible", async () => {
    const { container } = render(<CreateProfile />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
