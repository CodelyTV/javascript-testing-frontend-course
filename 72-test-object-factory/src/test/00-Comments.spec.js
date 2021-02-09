import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "./test-utils";
import Comments from "../components/Comments";
import { getAllComments, createComment } from "../services/commentsRepository";

jest.mock("../services/commentsRepository");

const user = {
  name: "Núria",
  avatar: "/nuria.png"
};

describe("When a user lands on page", () => {
  it("should render the comments", async () => {
    getAllComments.mockResolvedValueOnce([
      {
        user,
        content: "An already existing comment",
        date: new Date().toISOString()
      }
    ]);

    render(Comments);

    const comment = await screen.findByText("An already existing comment");
    expect(comment).toBeInTheDocument();
  });
});

describe("When the user is not logged", () => {
  it("should not render the form to post new comments", async () => {
    render(Comments);

    const form = screen.queryByRole("heading", "Add a comment");
    expect(form).not.toBeInTheDocument();
  });
});

describe("When the user is logged", () => {
  it("should render the form to post new comments", async () => {
    render(Comments, {
      initialState: {
        user
      }
    });

    expect(screen.queryByRole("heading", "Add a comment")).toBeInTheDocument();
  });

  describe("and fills in the form", () => {
    it("should list the new post", async () => {
      createComment.mockImplementationOnce(data => ({
        ...data,
        date: new Date().toISOString()
      }));

      render(Comments, {
        initialState: {
          user
        }
      });

      const comment = "My new comment";

      const textarea = screen.getByLabelText(/comment/i);
      userEvent.type(textarea, comment);

      const button = screen.getByRole("button", /add comment/i);
      userEvent.click(button);

      const newComment = await screen.findByText(comment);
      expect(newComment).toBeInTheDocument();
    });
  });
});
