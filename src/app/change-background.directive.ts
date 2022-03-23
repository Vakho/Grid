import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
})
export class ChangeBackgroundDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
