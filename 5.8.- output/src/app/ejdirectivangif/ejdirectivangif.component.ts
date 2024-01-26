import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string;
  capital: string; 
 
  setResultado(){
    return this.capital === "Sevilla" ? true : false;
  }
}
