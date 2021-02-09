import { Component, OnInit } from '@angular/core';
import { Comment } from "../models/comment.model"
import { CommentRepositoryService } from '../services/CommentRepository.service'

@Component({
  selector: 'comments',
  template: `
  <comment *ngFor="let comment of comments;" [comment]="comment">
  </comment>
  `,
})
export class CommentsComponent implements OnInit {
  comments: Comment[]

  constructor(private commentRepo: CommentRepositoryService) {}
  
  async getComments() {
    this.comments = await this.commentRepo.getAll();
  }

  ngOnInit() {
    this.getComments();
  }
}
