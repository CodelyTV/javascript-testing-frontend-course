import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-post-form',
  template: `
  <form (submit)="handleSubmit($event)">
    <div>
      <label for="name">
        <strong>Name:</strong>
      </label>
      <input
        id="name"
        type="text"
        [value]="name"
        (input)="updateName($event.target.value)"
      >
    </div>
    
    <div>
      <label for="email">
        <strong>Email:</strong>
      </label>
      <input
        id="email"
        type="email"
        [value]="email"
        (input)="updateEmail($event.target.value)"
      >
    </div>

    <button type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        aria-labelledby="btn-title"
      >
        <title id="btn-title">Submit</title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
      </svg>
    </button>
  </form>`,
})
export class FormComponent {
  @Input() submit;
  name = '';
  email = '';

  updateName(value) {
    this.name = value
  }

  updateEmail(value) {
    this.email = value
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit({ name: this.name, email: this.email });
    event.target.reset();
  }
}
