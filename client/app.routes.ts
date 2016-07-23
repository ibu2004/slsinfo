import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent }  from './main.component';
//import { HeroListComponent }    from './hero-list.component';
const routes: RouterConfig = [
  { path: 'index', component: MainComponent },
//  { path: 'heroes', component: HeroListComponent }
];
export const appRouterProviders = [
  provideRouter(routes)
];
