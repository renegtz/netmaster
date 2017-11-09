

import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';



@Injectable()
export class PersonasService{

private clientes: Cliente[];

  constructor(private http: Http){



  }

  private url:string="http://coita.com.mx:8080/rest/ClientesP";

  cliente(){

  let headers = new Headers();

  return this.http.post(this.url, {headers} )
  .map(res =>{
    this.clientes=res.json();

  })

}

  getPersona():Cliente[]{


     return this.clientes;

 }

 getunaPersona(idx:number){
    return this.clientes[idx-1];
 }


 buscarClientes(buscado:string):Cliente[]{
   let personasN:Cliente[]=[];
   buscado= buscado.toLowerCase();

   for(let personasB of this.clientes){
      let  nombre = personasB.nombre.toLowerCase();

      if(nombre.indexOf(buscado) >=0 ){
        personasN.push(personasB);

      }


   }



  return personasN;
 }


}

export interface Persona{
nombre:string;
bio:string;
img:string;
aparicion:string;
casa:string;

}
export interface Cliente{
  nombre:string;
  apellidoMaterno:string;
  apellidoPaterno:string;
  velocidad:string;
  precio:number;
  idcliente:number;
  img:string;
  direccion1:string;
  direccion2:string;
  numerotelefonico:number;

}
