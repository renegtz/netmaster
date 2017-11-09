import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/shared/home/home.component';
import {AboutComponent} from './components/shared/about/about.component';
import {PersonasComponent} from './components/shared/personas/personas.component';
import {PersonaComponent} from './components/shared/persona/persona.component';
import {ClientesComponent} from './components/shared/clientes/clientes.component';
import {CompletarpagoComponent} from './components/shared/completarpago/completarpago.component';
import {HistorialComponent} from './components/shared/historial/historial.component';
import {EditarComponent} from './components/shared/editar/editar.component';



const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path: 'personas',component: PersonasComponent},
{path: 'persona/:id',component: PersonaComponent},
{path: 'clientes/:nombre',component: ClientesComponent},
{path: 'pago/:id',component: CompletarpagoComponent},
{path: 'historial/:id',component: HistorialComponent},
{path: 'editar/:id',component: EditarComponent},

{path: '**', pathMatch: 'full', redirectTo: 'home'}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
