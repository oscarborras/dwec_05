import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() aviso: string;  
  @Output() mensajeMarcado = new EventEmitter();
  //public aviso: string = 'Este texto proviene del componente hijo';

  leido: boolean = false;
  mensaje: string;

  marcar() {
      this.leido = !this.leido;
  }

  detectar(event) {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
  }
}
