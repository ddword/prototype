import { NgModule } from '@angular/core';
import { UnitComponent } from './unit.component';
import { Routes, RouterModule } from '@angular/router';

/**
 * @params Guards temporary hardcoded
 * Todo write IsConnectedGuard, canActivate or canActivateChildren
 * Todo path: 'web-app' and path: '', redirectTo: '/homepage'
 */
const IsConnectedGuard = true;
const unitRoutes: Routes = [
  { path: '',
    component: UnitComponent,
    children: [
      { path: 'documents', loadChildren: './documentation/documentation.module#DocumentationModule' },
      { path: 'homepage', loadChildren: './home-page/home-page.module#HomePageModule' },
      // write in 2nd step { path: 'web-app', canActivate: [IsConnectedGuard], component: '' },
      // write in 3nd step { path: 'diligent', canActivate: [IsConnectedGuard], component: '' },
    ]
  }
];

@NgModule({
    imports: [ RouterModule.forChild(unitRoutes) ],
    exports: [RouterModule]
})
export class UnitRoutingModule {}
