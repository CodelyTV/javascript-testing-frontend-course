import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../services/postsRepository";
import Form from "./Form";

function Posts() {
  const [posts, setPosts] = useState([]);

  function submit(data) {
    createPost(data).then((newPost) => setPosts([newPost, ...posts]));
  }

  useEffect(() => {
    getAllPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div>
      <h1>Create new post</h1>
      <Form submit={submit} />

      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Posts;
