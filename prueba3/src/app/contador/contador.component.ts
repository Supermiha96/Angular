import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<hr>
  <h3>Contador: {{contador}}</h3>


    <button (click)="modificarValor(-1)">-1</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="modificarValor(-1)">-1</button>

  `
})
export class ContadorComponent{
  public contador: number = 10;

  modificarValor(valor: number): void {
    this.contador += valor;
  }

  resetContador(): void {
    this.contador = 10;
  }
}
