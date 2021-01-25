import { render, screen } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";
import {CreateProfileComponent} from "../components/create-profile.component";
import { FormComponent } from "../components/form.component";
import { SuccessMessageComponent } from "../components/success-message.component";

describe("CreateProfile component", () => {
  it("should display thank you message when user submits the form", async () => {
    await render(CreateProfileComponent, {
      declarations: [FormComponent, SuccessMessageComponent],
    });

    const name = screen.getByText(/name/i) as any;
    userEvent.type(name.nextSibling, "Jane");

    const email = screen.getByText(/email/i) as any;
    userEvent.type(email.nextSibling, "jane@example.com");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(await screen.findByText(/Thank you Jane/)).toBeInTheDocument();
  });
});
