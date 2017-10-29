import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PagosService {
  private url:string="http://localhost:8080/rest/Pagos";

  private pagos : Pago[];

  constructor(private http: Http) {


  }


  GetpagosService(){

  let headers = new Headers();

  return this.http.post(this.url, {headers} )
  .map(res =>{
    this.pagos=res.json();

  })

}



gethistorial():Pago[]{
  return this.pagos;
}

getunaPagos(idx:number){
   return this.pagos[idx-1];
}

}




export interface Pago{
idpago:number;
idcliente:number;
fecha:string;
fechapagoinicio:string;
fechapagofinal:string;
monto:number;
}
