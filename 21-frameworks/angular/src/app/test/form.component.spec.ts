import { render, screen } from '@testing-library/angular';
import userEvent from "@testing-library/user-event"
import { FormComponent } from '../components/form.component';

describe("Form component", () => {
  it("calls submit method with title and content", async () => {
    const submit = jest.fn();
    await render(FormComponent, {
      componentProperties: { submit },
    })
    
    const title = screen.getByLabelText(/title/i);
    userEvent.type(title, "My awesome post");
    
    const content = screen.getByLabelText(/content/i);
    userEvent.type(content, "Lorem ipsum dolor sit amet");

    const button = screen.getByText(/submit/i);
    userEvent.click(button);

    expect(submit).toHaveBeenCalledWith({
      title: "My awesome post",
      content: "Lorem ipsum dolor sit amet",
    });
  });
});
