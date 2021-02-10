export async function getAllComments(articleId) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${articleId}`,
  )
    .then(response => response.json())
    .then(comments =>
      comments.map(comment => ({
        id: comment.id,
        title: comment.name,
        username: comment.email.split("@")[0],
        body: comment.body,
      })),
    );
}
