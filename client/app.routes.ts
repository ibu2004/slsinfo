import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent }  from './main.component';
import { DesignDevComponent }    from './design-dev.component';
import { DescComponent }    from './desc.component';
import { FabTestComponent }    from './fabtest.component';
import { MissionsComponent }    from './missions.component';
const routes: RouterConfig = [
  { path: 'index', component: MainComponent },
  { path: 'design-dev', component: DesignDevComponent },
  { path: 'desc', component: DescComponent },
  { path: 'fabtest', component: FabTestComponent },
  { path: 'missions', component: MissionsComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
