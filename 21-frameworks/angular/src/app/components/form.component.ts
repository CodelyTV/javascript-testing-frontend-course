import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-post-form',
  template: `
  <form (submit)="handleSubmit($event)">
    <label for="title">Title:</label>
    <input
      id="title"
      type="text"
      [value]="title"
      (input)="updateTitle($event.target.value)"
    >

    <label for="content">Content:</label>
    <textarea id="content" [value]="content" (input)="updateContent($event.target.value)"></textarea>

    <button type="submit">Submit</button>
  </form>`,
})
export class FormComponent {
  @Input() submit;
  title = '';
  content = '';

  updateTitle(value) {
    this.title = value
  }

  updateContent(value) {
    this.content = value
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit({ title: this.title, content: this.content });
    event.target.reset();
  }
}
