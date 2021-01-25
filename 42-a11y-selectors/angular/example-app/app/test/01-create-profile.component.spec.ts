import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";
import {CreateProfileComponent} from "../components/create-profile.component";
import { FormComponent } from "../components/form.component";
import { SuccessMessageComponent } from "../components/success-message.component";

expect.extend(toHaveNoViolations);

describe("CreateProfile component", () => {
  it("should be accessible", async () => {
    const {container} = await render(CreateProfileComponent, {
      declarations: [FormComponent, SuccessMessageComponent],
    });

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should display thank you message when user submits the form", async () => {
    await render(CreateProfileComponent, {
      declarations: [FormComponent, SuccessMessageComponent],
    });

    const nameInput = screen.getByLabelText(/name/i);
    userEvent.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "jane@example.com");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();
  });
});
