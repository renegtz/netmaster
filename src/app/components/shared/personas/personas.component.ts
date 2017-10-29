import { Component, OnInit } from '@angular/core';
import {PersonasService, Persona,Cliente} from '../../../services/personas.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  private timer;

personas : Cliente []= [];


  constructor(private _personasService:PersonasService,
    private router:Router) {
      this.getPersonas();
      this.time();
  }


  ngOnInit() {
  this._personasService.cliente().subscribe();

}
getPersonas(){
  this.personas = this._personasService.getPersona();
}

time() {
    this.timer = setTimeout(() => this.getPersonas(), 1500);
}



  verPersona(idx:number){
    this.router.navigate(['/persona',idx])
  }

}
