import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') highlight() {
   // this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave') cancelHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
