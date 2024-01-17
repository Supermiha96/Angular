import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

    public nombre: string = 'ironman';
    public edad:   number = 35;

    get nombreCapitalizado():string{
      return this.nombre.toUpperCase();
    }


    getDescripcionHeroe() :string{
      return `${this.nombre} - ${this.edad}`;
    }
    //Decir que los haga ellos
    cambiarNombreHeroe():void{
      this.nombre = 'spriderman'
    }
    //Decir que los hagan ellos
    cambiarEdadHeroe():void{
      this.edad = 22
    }

    restablecerValores() {
      this.nombre= 'ironman';
      this.edad= 35;
      }


}
