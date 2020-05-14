import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: RegisterComponent
    }])
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
