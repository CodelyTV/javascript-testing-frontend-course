import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("Form component", () => {
  it("calls submit method with title and content", () => {
    const submit = jest.fn();
    render(<Form submit={submit} />);

    const title = screen.getByLabelText(/title/i);
    fireEvent.change(title, { target: { value: "My awesome post" } });

    const content = screen.getByLabelText(/content/i);
    fireEvent.change(content, {
      target: { value: "Lorem ipsum dolor sit amet" },
    });

    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);

    expect(submit).toHaveBeenCalledWith({
      title: "My awesome post",
      content: "Lorem ipsum dolor sit amet",
    });
  });
});
