import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  template: `
    <div>
      <h1>Create new post</h1>
      <create-post-form [submit]="createPost.bind(this)"></create-post-form>

      <section>
        <article *ngFor="let post of posts">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </article>
      </section>
    </div>
  `,
})
export class PostsComponent {
  posts = [];
  
  createPost(data) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((newPost) => {
          this.posts.push(newPost)
        });
  }
}
