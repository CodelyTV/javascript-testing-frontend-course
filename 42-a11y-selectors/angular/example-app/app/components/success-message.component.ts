import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-message',
  template: `
  <p>Thank you {{ user.name }}!</p>`,
})
export class SuccessMessageComponent {
  @Input() user;
}
