import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding ('class.item-orange') private mostrar: boolean = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }

}
