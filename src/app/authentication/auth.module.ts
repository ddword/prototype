import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/authentication/auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
