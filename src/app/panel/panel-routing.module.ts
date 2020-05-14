import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';


/**
 * @params Guards temporary hardcoded
 * Todo path 'logout' and 'user'
 */
const PanelRoutes: Routes = [
  { path: '', redirectTo: 'unit/homepage', pathMatch: 'full'},
  { path: '',
    canActivate: [AuthGuard],
    component: PanelComponent,
    children: [
    // { path: 'user', component: UserComponent },
    // { path: '#logout', component: LogoutComponent },
      {
        path: 'unit',
        loadChildren: './../unit-modules/unit.module#UnitModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(PanelRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PanelRoutingModule {}
