import { Injectable } from '@angular/core';
import { Http,Headers, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';
import {pagoregistro} from '../interfaces/pagoregistro.interface';



@Injectable()
export class PagosService {
  private url:string="http://coita.com.mx:8080/rest/Pagos";
  private urlPagarPost:string="http://coita.com.mx:8080/rest/pagar";
  private urlEliminart:string="http://coita.com.mx:8080/rest/eliminar";
  private urlEditar:string="http://coita.com.mx:8080/rest/editar";

  private pagos : Pago[];
  private pago: Pago;

  constructor(private http: Http) {


  }

private datos: Pago;

  GetpagosService(){
  let headers = new Headers();
  return this.http.post(this.url, {headers} )
  .map(res =>{
    this.pagos=res.json();
  })

}

setPago(datos:pagoregistro){

  let headers = new Headers({
    'Content-Type':'application/json'
  });

  let body =JSON.stringify(datos);
  return this.http.post(this.urlPagarPost,body, {headers} )
  .map(res =>{
    return res;
  })
}

gethistorial():Pago[]{
  return this.pagos;
}

getunaPagos(idx:number){
  for(let i=0;i<this.pagos.length;i++){

      if(idx==this.pagos[i].idpagos){
        this.pago=this.pagos[i]
      }
  }
   return this.pago;
}
eliminar(datos:pagoregistro){
  let headers = new Headers({
    'Content-Type':'application/json'
  });
  let body =JSON.stringify(datos);
  return this.http.post(this.urlEliminart,body, {headers} )
  .map(res =>{
    return res;
  })

}

setEditar(datos:pagoregistro){

  let headers = new Headers({
    'Content-Type':'application/json'
  });

  let body =JSON.stringify(datos);
  return this.http.post(this.urlEditar,body, {headers} )
  .map(res =>{
    return res;
  })
}


}




export interface Pago{
idpagos:number;
idcliente:number;
fecha:string;
fechapagoinicio:string;
fechapagofinal:string;
monto:number;
}
