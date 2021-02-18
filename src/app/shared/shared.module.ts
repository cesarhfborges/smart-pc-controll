import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoFocusDirectiveDirective} from './directives/auto-focus-directive.directive';
import { BtnToggleComponent } from './components/btn-toggle/btn-toggle.component';

@NgModule({
  declarations: [
    AutoFocusDirectiveDirective,
    BtnToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutoFocusDirectiveDirective,
    BtnToggleComponent,
  ]
})
export class SharedModule {
}
