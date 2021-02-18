import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthLayoutComponent} from './auth-layout.component';
import {LoginComponent} from './login/login.component';
import {NbLayoutModule} from '@nebular/theme';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
  ]
})
export class AuthModule {
}
