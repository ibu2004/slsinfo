import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
  <div id="header">
    <h1>Space Launch System</h1>
      <nav>
        <a routerLink="/index" routerLinkActive="active">main page</a>
      </nav>
  </div>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }