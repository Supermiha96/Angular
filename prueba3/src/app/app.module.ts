import { ContadorComponent } from './../../../prueba3/src/app/contador/contador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListaHeroesComponent } from './heroes/lista-heroes/lista-heroes.component';


@NgModule({
    declarations: [
        AppComponent,
        ContadorComponent,
        HeroeComponent,
        ListaHeroesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
