import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PersonasService, Persona,Cliente} from '../../../services/personas.service'

@Component({
  selector: 'app-completarpago',
  templateUrl: './completarpago.component.html',
  styleUrls: ['./completarpago.component.css']
})
export class CompletarpagoComponent implements OnInit {
persona:any ={};
montoPago:number;
today: number = Date.now();
fecha:string;
fechaI:string;
fecha2:string;
valido:boolean;
textoValidar:string;

  constructor(private router:Router ,
  private activatedRoute: ActivatedRoute,
private _personasService:PersonasService) {
  this.montoPago=201;
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.persona = this._personasService.getunaPersona(params['id']);
    });
    console.log(this.persona);


  }

  ngOnInit() {
  }

  monto(monto:number,fecha:string,fecha2:string){
    console.log(monto+" "+fecha+ " "+fecha2);
    this.montoPago=monto;
    this.fechaI=fecha;
    this.fecha2=fecha2;
    this.validar();

  }

  validar(){
if(this.montoPago==null ||  this.fechaI==null || this.fechaI=="" ||   this.fecha2==null || this.fecha2=="")
{
this.valido=false;
this.textoValidar="LLENAR TODOS LOS ESPACIOS VACIOS";
}else if(this.montoPago<=-1 ){
  this.valido=false;
this.textoValidar="EL MONTO A PAGAR NO PUEDE SER NEGATIVO ";

}else{

  this.valido=true;
  this.pago();
}


}
  pago(){
console.log("completo pago");
  }

}
