import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/angular";
import {CreateProfileComponent} from "../components/create-profile.component";
import { FormComponent } from "../components/form.component";
import { SuccessMessageComponent } from "../components/success-message.component";

expect.extend(toHaveNoViolations);

describe("CreateProfile component", () => {
  it("should be accessible", async () => {
    const { container } = await render(CreateProfileComponent, {
      declarations: [FormComponent, SuccessMessageComponent],
    });

    expect(await axe(container)).toHaveNoViolations();
  });
});
