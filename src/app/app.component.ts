import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countryApp';

  myTheme: string = 'light';

  constructor() {
    this.changeTheme();
  }

  changeTheme() {
    this.myTheme = this.myTheme === 'light' ? 'dark' : 'light';
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', this.myTheme);
  }
}
