import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const AuthRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './../authentication/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './../authentication/register/register.module#RegisterModule' },
  { path: 'forgot', loadChildren: './../authentication/forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'reset', loadChildren: './../reset-password/reset-password.module#ResetPasswordModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
