import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  puntuacion = 8;

  getPuntuacion() {
    return this.puntuacion;
  }
}
