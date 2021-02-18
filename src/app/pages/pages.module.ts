import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesLayoutComponent } from './pages-layout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [PagesLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
