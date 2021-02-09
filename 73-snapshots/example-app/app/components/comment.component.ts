import { Component, Input } from '@angular/core';
import { Comment } from "../models/comment.model"

@Component({
  selector: 'comment',
  styles: [`
  .comment {
    max-width: 30rem;
    margin: 1rem auto;
    padding: 1rem 0;
    border-top: 1px solid #ddd;
    font-family: sans-serif;
    text-align: left;
  }
  .comment:last-child {
    border-bottom: 1px solid #ddd;
  }
  .comment__info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .comment__avatar {
    max-width: 2.5rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
  `],
  template: `
    <article class="comment">
      <div class="comment__info">
        <img
          class="comment__avatar"
          [src]="comment.user.avatar"
          [alt]="comment.user.name"
        />

        {{ date }} —&nbsp;
        <em>
          <strong>{{ comment.user.name }}</strong> said:
        </em>
      </div>
      {{ comment.content }}
    </article>
  `,
})
export class CommentComponent {
  @Input() comment: Comment 

  get date() {
    return new Date(this.comment.date).toDateString();
  }
}
