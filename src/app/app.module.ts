import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
//rutas
import  {APP_ROUTING} from './app.routes';
//servicios
import {PersonasService} from './services/personas.service';
import {PagosService} from './services/pagos.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { PersonasComponent } from './components/shared/personas/personas.component';
import { AboutComponent } from './components/shared/about/about.component';
import { PersonaComponent } from './components/shared/persona/persona.component';
import { ClientesBuscadosComponent } from './components/shared/clientes-buscados/clientes-buscados.component';
import { ClientesComponent } from './components/shared/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonasComponent,
    AboutComponent,
    PersonaComponent,
    ClientesBuscadosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PersonasService,
    PagosService,
  { provide:  LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
