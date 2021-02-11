export async function getArticle(id) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/`,
  ).then(response => response.json());
}
