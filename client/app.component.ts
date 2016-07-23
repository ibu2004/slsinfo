import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
  <div id="header">
    <h1>Space Launch System</h1>
      <nav>
        <a class="hyperlinks" routerLink="/index" routerLinkActive="active">Information</a>
        <a class="hyperlinks" routerLink="/design-dev" routerLinkActive="active">Design and Development</a>
        <a class="hyperlinks" routerLink="/desc" routerLinkActive="active">Vehicle Description</a>
      </nav>
  </div>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }