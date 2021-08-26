import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDeractiveTest]'
})
export class CustomDeractiveTestDirective {

  constructor(private el:ElementRef, private render:Renderer2) {
    // this.changeColor('red');
  }

  changeColor(color:string){
    this.render.setStyle(this.el.nativeElement, 'color' , color)
  }

  @HostBinding('style.border') border :string | undefined;

  @HostListener('click')
  onclick() {
    this.border='10px solid red';
    this.changeColor('red');
  }

  @HostListener('mouseover') onMouseOver(){
     this.border='10px solid red';
     this.changeColor('red');
  }
}

