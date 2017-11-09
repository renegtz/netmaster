import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {pagoregistro} from '../../../interfaces/pagoregistro.interface';
import {PagosService} from '../../../services/pagos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
idpago:number;

editar:any;
montoPago:number;
fecha:string;
fechaI:string;
fecha2:string;
valido:boolean;
textoValidar:string;

  constructor(  private activatedRoute: ActivatedRoute,
   private _pagosService:PagosService,
 private router:Router) {
    this.activatedRoute.params.subscribe(params =>{
    this.idpago=params['id'];
    });
    this.editar=_pagosService.getunaPagos(this.idpago);
  }

  ngOnInit() {
  }

  monto(monto:number,fecha:string,fecha2:string,fecha3:string){
    this.montoPago=monto;
    this.fechaI=fecha;
    this.fecha2=fecha2;
    this.fecha=fecha3;
    this.validar();

  }

  validar(){
if(this.montoPago==null || this.fecha==null || this.fecha==""|| this.fechaI==null || this.fechaI=="" ||   this.fecha2==null || this.fecha2=="")
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
    this.editar.fechapagoinicio=this.fechaI;
    this.editar.fechapagofinal=this.fecha2;
    this.editar.monto=this.montoPago;
    this.editar.fecha= this.fecha;

    this._pagosService.setEditar(this.editar).subscribe();


alert("EDITADO");
  }

  regresar(id:number){
    this.router.navigate(['/historial',id])

  }

}
