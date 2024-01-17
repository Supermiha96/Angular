import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorModule } from "./contador/contador.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContadorModule]
})
export class AppComponent {
  public title: string = 'Mi primera App';
  public contador: number = 10;

  modificarValor(valor: number): void {
    this.contador += valor;
  }

  resetContador(): void {
    this.contador = 10;
  }
}
