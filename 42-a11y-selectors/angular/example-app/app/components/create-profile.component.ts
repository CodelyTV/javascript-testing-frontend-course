import { Component } from '@angular/core';

@Component({
  selector: 'create-profile',
  template: `
    <div>
      <h1>Create new post</h1>
      <success-message *ngIf="userCreated; else form" [user]="user"></success-message>
      <ng-template #form>
        <create-post-form [submit]="createPost.bind(this)"></create-post-form>
      </ng-template>
    </div>
  `,
})
export class CreateProfileComponent {
  user:any = null;
  
  createPost(data) {
    this.user = data
  }

  get userCreated() {
    return !!this.user?.name;
  }
}
