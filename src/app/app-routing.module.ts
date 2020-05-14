import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',
    loadChildren: './authentication/auth.module#AuthModule'
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    loadChildren: './panel/panel.module#PanelModule',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
