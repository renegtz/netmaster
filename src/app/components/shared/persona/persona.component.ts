import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
private _pagosService:PagosService ) {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.persona = this._personasService.getunaPersona(params['id']);
    });
    console.log(this.persona);
   }



  ngOnInit() {
  }

}
