import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseDirective } from './directives/upper-case.directive';


@NgModule({
  declarations: [
    UpperCaseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UpperCaseDirective
  ]
})
export class SharedModule { }
