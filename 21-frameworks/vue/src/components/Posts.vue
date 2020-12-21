<template>
  <div>
    <h1>Create new post</h1>
    <Form :submit="createPost" />

    <section>
      <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </article>
    </section>
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  components: {
    Form,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    createPost(data) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((newPost) => this.posts.push(newPost));
    },
  },
};
</script>
