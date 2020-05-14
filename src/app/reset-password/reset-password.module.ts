import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from 'src/app/reset-password/reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ResetPasswordComponent
    }])
  ],
})
export class ResetPasswordModule { }
