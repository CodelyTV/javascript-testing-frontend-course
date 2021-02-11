import { render, screen } from "@testing-library/angular";
import { CommentsComponent } from "../components/comments.component";
import { CommentComponent } from "../components/comment.component";
import { CommentRepositoryService } from "../services/CommentRepository.service";
import CommentFactory from "./factories/comment"

describe("Comments component", () => {
  it("should render the list of comments", async () => {
    const commentsList = CommentFactory.buildList(1);

    await render(CommentsComponent, {
      declarations: [CommentComponent],
      componentProviders: [
        {
          provide: CommentRepositoryService,
          useValue: {
            async getAll() {
              return await commentsList;
            },
          },
        },
      ],
    });

    const comment = await screen.findByText(commentsList[0].content)

    expect(comment).toBeInTheDocument();
  });
});
