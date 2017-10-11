import { Component, OnInit } from '@angular/core';
import {PersonasService, Persona,Cliente} from '../../../services/personas.service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

personas : Cliente []= [];


  constructor(private _personasService:PersonasService,
    private router:Router) {



  }


  ngOnInit() {

    this.personas = this._personasService.getPersona();
  console.log(this.personas);

}



  verPersona(idx:number){
    this.router.navigate(['/persona',idx])

  }

}
