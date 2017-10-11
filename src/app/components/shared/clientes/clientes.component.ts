import { Component, OnInit } from '@angular/core';
import {PersonasService, Persona,Cliente} from '../../../services/personas.service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  personasB : Cliente []= [];
  personas : Cliente []= [];

  buscada:string;
  constructor(private _personasService:PersonasService,
  private  activatedRoute:ActivatedRoute,
    private router:Router) {


    }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
    this.buscada=params['nombre'];
    if(this.buscada==null || this.buscada==undefined || this.buscada==""){
      this.router.navigate(['/personas']);

    }else{
      console.log("nombre a buscar "+this.buscada);
      this.personasB=this._personasService.buscarClientes(this.buscada);

        this.personas=this.personasB;
        console.log(this.personas);
    }

    });



  }
  verPersona(idx:number){
    this.router.navigate(['/persona',idx])

  }


}
