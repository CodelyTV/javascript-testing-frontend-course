import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Posts from "../components/Posts";

describe("Posts component", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  describe("when user loads the component", () => {
    it("should list posts", async () => {
      const posts = [
        {
          id: 1,
          title: "My post",
          body: "lorem ipsum",
        },
      ];

      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => posts,
      });

      render(<Posts />);

      const post = await screen.findByRole("heading", { name: "My post" });

      expect(post).toBeInTheDocument();
    });
  });

  describe("when user submits a new post", () => {
    it("should list new post", async () => {
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      });

      render(<Posts />);

      const newPost = {
        title: "My new awesome post",
        content: "An interesting block of text",
      };
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          ...newPost,
          id: 2,
        }),
      });

      const titleInput = screen.getByLabelText(/title/i);
      userEvent.type(titleInput, newPost.title);

      const contentInput = screen.getByLabelText(/content/i);
      userEvent.type(contentInput, newPost.content);

      const button = screen.getByRole("button", { name: /submit/i });
      userEvent.click(button);

      const createdPost = await screen.findByRole("heading", {
        name: newPost.title,
      });
      expect(createdPost).toBeInTheDocument();
    });
  });
});
