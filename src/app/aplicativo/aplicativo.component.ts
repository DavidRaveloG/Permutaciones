import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.css']
})
export class AplicativoComponent implements OnInit {

  cantidad_x = 0;
  cantidad_n = 0;
  cantidad_x_n = 0;
  combinatoria = 0;
  fact: number = 1;
  cantidad_nF = 0;
  cantidad_xF = 0;
  cantidad_xnF = 0;
  constructor() { }

  ngOnInit(): void {
  }
  combinatoriaC () : void{
 
    this.cantidad_nF = 0;
    this.combinatoria =0;
  this.cantidad_xF = 0;
  this.cantidad_xnF = 0;
  this.cantidad_x_n = 0;
  this.cantidad_x_n = this.cantidad_n-this.cantidad_x;
  this.cantidad_nF=this.factorial(this.cantidad_n);
  this.cantidad_xF=this.factorial(this.cantidad_x);
  this.cantidad_xnF = this.cantidad_x*this.factorial(this.cantidad_x_n);
  this.combinatoria=this.cantidad_nF/(this.cantidad_xnF);
  }
  factorial(n: number) :number {
    this.fact =1;
    while (n > 0) {
      this.fact = this.fact * n;
      n = n - 1;
    }
    return this.fact;
  }
  

}
