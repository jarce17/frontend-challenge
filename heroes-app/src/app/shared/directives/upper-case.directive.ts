import { Directive, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UpperCaseDirective implements AfterContentChecked {

  constructor(private el: ElementRef) { }

  ngAfterContentChecked(): void {
    this.textUpperCase()
  }

  private textUpperCase() {
    const textUpperCase = (this.el.nativeElement.value).toLocaleUpperCase()
    this.el.nativeElement.value = textUpperCase
  }
}