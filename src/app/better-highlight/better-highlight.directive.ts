import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundcolor = '#E9FAF9';
  // @HostBinding('style.backgroundColor') backgroundcolor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
  }

  @HostListener ('mouseenter') mouseover(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#FDF78D');
    this.backgroundcolor = '#FDF78D';
  }
  @HostListener ('mouseleave') mouseleave(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#F696A0');
    this.backgroundcolor = '#F696A0';
  }
}
