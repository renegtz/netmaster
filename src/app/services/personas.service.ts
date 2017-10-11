

import {Injectable} from '@angular/core';





@Injectable()
export class PersonasService{

private clientes: Cliente[]=[{
nombre:"Roberto Aragon",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"3 a 4 MEGAS",
precio:200,
idCliente:1,
img: "assets/img/man.jpg",
direccion1:"3 sur entre 1 y 2 orinte",
direccion2:"entre aurecarias y clavel",
numeroTelefonico:9612250376


},{
nombre:"instituto deportivo parque del oriente",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"6 a 7 MEGAS",
precio:380,
idCliente:2,
img:  "assets/img/man.jpg",
direccion1:"avenida los almendros 242",
direccion2:"entre aurecarias y clavel",
numeroTelefonico:9612250376

},{
nombre:"Emily Romanoff",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"6 a 7 MEGAS",
precio:380,
idCliente:3,
img: "assets/img/woman.jpg",
direccion1:"avenida los almendros 242",
direccion2:"entre aurecarias y clavel",
numeroTelefonico:9612250376

},{
nombre:"instituto deportivo parque del oriente",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"6 a 7 MEGAS",
precio:380,
idCliente:4,
img:  "assets/img/man.jpg",
direccion1:"",
direccion2:"",
numeroTelefonico:null

},{
nombre:"instituto deportivo parque del oriente",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"6 a 7 MEGAS",
precio:380,
idCliente:2,
img:  "assets/img/man.jpg",
direccion1:"",
direccion2:"",
numeroTelefonico:null

},{
nombre:"instituto deportivo parque del oriente",
apellidoMaterno:"",
apellidoPaterno:"",
velocidad:"6 a 7 MEGAS",
precio:380,
idCliente:2,
img:  "assets/img/man.jpg",
direccion1:"",
direccion2:"",
numeroTelefonico:null

}
];

  private personas : Persona[] = [
      {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa:"DC"
      },
      {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa:"DC"
      },
      {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa:"Marvel"
      },
      {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      }
    ];
  constructor(){

    console.log("servicio listo para usar!!!")

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
  idCliente:number;
  img:string;
  direccion1:string;
  direccion2:string;
  numeroTelefonico:number;

}
