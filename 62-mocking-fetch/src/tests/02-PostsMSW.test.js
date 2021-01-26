import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { createPost, getPosts } from "../mocks/handlers";
import Posts from "../components/Posts";

describe("Posts component", () => {
  describe("when user loads the component", () => {
    it("should list posts", async () => {
      const posts = [
        {
          id: 1,
          title: "My post",
          body: "lorem ipsum",
        },
      ];

      server.use(getPosts(posts));

      render(<Posts />);

      const post = await screen.findByRole("heading", { name: "My post" });

      expect(post).toBeInTheDocument();
    });
  });

  describe("when user submits a new post", () => {
    it("should list new post", async () => {
      const newPost = {
        title: "My new awesome post",
        content: "An interesting block of text",
      };
      server.use(
        createPost({
          ...newPost,
          id: 2,
        })
      );

      render(<Posts />);

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
