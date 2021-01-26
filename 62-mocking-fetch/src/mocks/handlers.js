import { rest } from "msw";

export function getPosts(response = [], status = 200) {
  return rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response));
    }
  );
}

export function createPost(response = {}, status = 200) {
  return rest.post(
    "https://jsonplaceholder.typicode.com/posts",
    (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response));
    }
  );
}

export const handlers = [createPost(), getPosts()];
