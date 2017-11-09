import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PersonasService, Persona,Cliente} from '../../../services/personas.service'
import {pagoregistro} from '../../../interfaces/pagoregistro.interface';
import {PagosService} from '../../../services/pagos.service';

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

pagoD:pagoregistro={
  idpago:1,
  idcliente:2,
  fecha:"string",
  fechapagoinicio:"string",
  fechapagofinal:"string",
  monto:1,
  key$:""
}

  constructor(private router:Router ,
  private activatedRoute: ActivatedRoute,
private _personasService:PersonasService,
private _pagosService:PagosService) {
    this.activatedRoute.params.subscribe(params =>{

      this.persona = this._personasService.getunaPersona(params['id']);
    });

  }

  ngOnInit() {
  }

  monto(monto:number,fecha:string,fecha2:string){
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
    this.pagoD.fechapagoinicio=this.fechaI;
    this.pagoD.fechapagofinal=this.fecha2;
    this.pagoD.monto=this.montoPago;
    this.pagoD.fecha= ""+Date.now();
    this.pagoD.idcliente=this.persona.idcliente;

    this._pagosService.setPago(this.pagoD).subscribe();

    alert("PAGADO");
  }

}
