import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'accessibility' },
    { title: 'Mayor', url: 'mayor', icon: 'extension-puzzle' },
    { title: 'Tabla', url: 'tabla', icon: 'medical' },
    //wendrykoralis 2019-7914
  ];
  constructor() {}
}
