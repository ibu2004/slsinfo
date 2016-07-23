import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent }  from './main.component';
import { DesignDevComponent }    from './design-dev.component';
import { DescComponent }    from './desc.component';
const routes: RouterConfig = [
  { path: 'index', component: MainComponent },
  { path: 'design-dev', component: DesignDevComponent },
  { path: 'desc', component: DescComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
