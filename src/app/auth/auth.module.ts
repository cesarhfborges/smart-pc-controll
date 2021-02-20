import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthLayoutComponent} from './auth-layout.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
