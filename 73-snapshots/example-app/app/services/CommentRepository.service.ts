import { Injectable } from '@angular/core';

import { Comment } from '../models/comment.model'


@Injectable({
  providedIn: 'root',
})
export class CommentRepositoryService {

  constructor() { }

  async getAll(): Promise<Comment[]> {
    return await [
      {
        user: {
          id: 1,
          name: "Nicholas Cage",
          avatar: "https://www.placecage.com/120/120"
        },
        id: 1,
        content: "Lorem ipsum dolor sit amet",
        date: "2021-01-31"
      }
    ];
  }
}