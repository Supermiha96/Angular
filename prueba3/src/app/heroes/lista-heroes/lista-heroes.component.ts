import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrl: './lista-heroes.component.css'
})
export class ListaHeroesComponent {

  public nombresHeroes: string []=['SpiderMan','Hulk','IronMan','Thor','Dark Moon'];
  public heroeBorrado?:string

  eliminarUltimoHeroe():void{
    this.heroeBorrado = this.nombresHeroes.pop();
    //console.log({heroeBorrado})
  }


}
