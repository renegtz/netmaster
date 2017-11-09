import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {PersonasService, Persona,Cliente} from '../../../services/personas.service'
import {PagosService} from '../../../services/pagos.service'


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
persona:any ={};

today: number = Date.now();

  constructor(private activatedRoute: ActivatedRoute,
  private _personasService:PersonasService,
private _pagosService:PagosService,
private router:Router ) {
    this.activatedRoute.params.subscribe(params =>{
      this.persona = this._personasService.getunaPersona(params['id']);
    });
   }

   pagar(idx:number){
     this.router.navigate(['/pago',idx])

   }

   historial(idx:number){
     this.router.navigate(['/historial',idx])

   }
  ngOnInit() {
  }

}
