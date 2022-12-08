import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Inicio', url: 'inicio', icon: 'apps' },
    { title: 'Partidos', url: 'partidos', icon: 'basketball' },
  ];
  constructor() {}
}
