import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements AfterContentInit {
  @Input() public appFocus: boolean;

  constructor(private _el: ElementRef) {}

  ngAfterContentInit(): void {
    setTimeout(() => this._el.nativeElement.focus());
  }
}
