import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'examples',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: 'examples'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
