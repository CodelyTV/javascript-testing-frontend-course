import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommentsComponent } from './components/comments.component'
import { CommentComponent } from './components/comment.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
