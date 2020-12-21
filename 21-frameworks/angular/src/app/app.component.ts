import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <main>
      <posts></posts>
    </main>
  `,
})
export class AppComponent {
  title = 'angular';
}
