import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from 'src/app/authentication/forgot-password/forgot-password.component';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ForgotPasswordComponent
    }])
  ],
})
export class ForgotPasswordModule { }
