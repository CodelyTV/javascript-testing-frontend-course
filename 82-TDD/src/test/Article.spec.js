import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Article from "@/components/Article";
import { getArticle } from "@/services/articlesRepository";
import { getAllComments } from "@/services/commentsRepository";
import { generateArticle } from "./factories/article";
import { generateCommentList } from "./factories/comment";

jest.mock("../services/articlesRepository");
jest.mock("../services/commentsRepository");

describe("Article component", () => {
  it("should display the article content", async () => {
    const article = generateArticle();
    getArticle.mockResolvedValueOnce(article);

    render(Article);

    const title = await screen.findByRole("heading", {
      name: article.title,
    });
    expect(title).toBeInTheDocument();

    const content = screen.getByText(article.body);
    expect(content).toBeInTheDocument();
  });

  describe("when there are comments", () => {
    it("should display the comments content", async () => {
      const commentList = generateCommentList();
      getAllComments.mockResolvedValueOnce(commentList);
      getArticle.mockResolvedValueOnce(generateArticle());

      render(Article);

      await screen.findByRole("heading", { name: "Comments" });

      commentList.forEach(comment => {
        expect(screen.getByText(comment.title)).toBeInTheDocument();
        expect(screen.getByText(comment.username)).toBeInTheDocument();
        expect(screen.getByText(comment.body)).toBeInTheDocument();
      });
    });
  });
});
