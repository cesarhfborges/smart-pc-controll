import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesLayoutComponent} from './pages-layout.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {
  NbActionsModule, NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbSearchModule, NbSelectModule,
  NbSidebarModule,
  NbUserModule
} from '@nebular/theme';


@NgModule({
  declarations: [PagesLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    NbIconModule,
    NbSelectModule,
    NbCardModule,
  ]
})
export class PagesModule {
}
