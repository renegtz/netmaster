import { Component, OnInit } from '@angular/core';
import {PagosService} from '../../../services/pagos.service';
import {PersonasService} from '../../../services/personas.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  private timer;

  pago:any =null;
  idCliente:number;
  separar:any ={};
  today: any=[];

  constructor( private activatedRoute: ActivatedRoute,
     private _pagosService:PagosService,
   private _personasService:PersonasService) {

    this.activatedRoute.params.subscribe(params =>{
    this.idCliente=params['id'];
    });
    this.getPagos();

  }

  ngOnInit() {
    this._pagosService.GetpagosService().subscribe();
    this.time();
  }


  time() {
      this.timer = setTimeout(() => this.getPagos(), 1500);
  }

getPagos(){
  this.pago = this._pagosService.gethistorial();
  if(this.pago!=null){
    for(let i=0;i<this.pago.length;i++){
      this.separar =this.pago[i].fechapagofinal.split('/');
      this.today.push( Date.parse(this.separar[2]+"-"+this.separar[1]+"-"+this.separar[0]+"T00:00:00"));
    }
  }
}



}
