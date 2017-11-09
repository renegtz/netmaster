import { Component, OnInit } from '@angular/core';
import {PagosService} from '../../../services/pagos.service';
import {PersonasService} from '../../../services/personas.service';
import {ActivatedRoute,Router} from '@angular/router';
import {pagoregistro} from '../../../interfaces/pagoregistro.interface';

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
  persona:any=null;
  verifica:boolean=false;
  cantidad:any=[];

  eliminarD:pagoregistro={
    idpago:1,
    idcliente:2,
    fecha:"string",
    fechapagoinicio:"string",
    fechapagofinal:"string",
    monto:1,
    key$:""
  }

  constructor( private activatedRoute: ActivatedRoute,
     private _pagosService:PagosService,
   private _personasService:PersonasService,
   private router:Router) {

    this.activatedRoute.params.subscribe(params =>{
    this.idCliente=params['id'];
    });
    this.getPagos();

  }

  ngOnInit() {
    this.persona=this._personasService.getunaPersona(this.idCliente);
    this._pagosService.GetpagosService().subscribe();

    this.actualizarPagos();
    this.time();
  }


  time() {
      this.timer = setTimeout(() => this.getPagos(), 400);
  }

getPagos(){
  this.pago = this._pagosService.gethistorial();
  let numero=0;
  if(this.pago!=null){
    this.today=[];
    this.cantidad=[];

    for(let i=0;i<this.pago.length;i++){
      this.separar =this.pago[i].fechapagofinal.split('-');
      this.today.push( Date.parse(this.separar[0]+"-"+this.separar[1]+"-"+this.separar[2]+"T00:00:00"));
      if(this.idCliente==this.pago[i].idcliente){
        this.verifica=true;
        numero=numero+1;
      }
        this.cantidad.push(numero);
    }

  }
  this.verificarHistorial(numero);
}

actualizarPagos(){
  this._pagosService.GetpagosService().subscribe();
  this.time();
}

verificarHistorial(numero:number){
  if(numero==0){
    this.verifica=false;
  }
}

eliminar(id:number){
this.eliminarD.idpago=id;
this._pagosService.eliminar(this.eliminarD).subscribe();
this.timer = setTimeout(() => this.actualizarPagos(), 500);


}

verEditar(id:number){
  this.router.navigate(['/editar',id])

}



}
