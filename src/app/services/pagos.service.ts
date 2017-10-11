import { Injectable } from '@angular/core';

@Injectable()
export class PagosService {
  private pagos : Pago[] = [
{
  idPago:1,
  idCliente:1,
  fecha:"10/10/2017",
  fechaPagoInicio:"1/10/2017",
  fechaPagoFinal:"31/10/2017"
},
{
  idPago:2,
  idCliente:1,
  fecha:"9/9/2017",
  fechaPagoInicio:"1/9/2017",
  fechaPagoFinal:"31/9/2017"
}
  ]

  constructor() {
    console.log("servicio pago listo!!!")
    console.log(this.pagos);
  }

}








export interface Pago{
  idPago:number;
idCliente:number;
fecha:string;
fechaPagoInicio:string;
fechaPagoFinal:string;
}
