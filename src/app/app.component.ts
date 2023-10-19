import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <app-user-card style="align-items: center; justify-content: center;display:flex;"></app-user-card>
          <app-sidebar></app-sidebar>
          `
})
export class AppComponent {
  title = 'app-todo';
}