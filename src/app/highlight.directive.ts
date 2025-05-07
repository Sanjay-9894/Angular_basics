import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.Highlight(this.appHighlight || 'yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.Highlight('')
  }

  private Highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
