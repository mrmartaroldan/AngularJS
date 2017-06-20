import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../environments/environment';


import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'.
// Este decorador no necesita que le indiquemos ningún metadato. 
// Es importante que no nos olvidemos de añadir el servicio en la colección de 
// 'prividers' del módulo de nuestra aplicación
@Injectable()
export class ContactosService {


  constructor(private _http: Http){}

  obtenerContactos(): Observable<Contacto[]>{

    // El Cliente HTTP trabaja con objetos 'Repsponse'. Este objeto tiene datos relacionados
    // con la repsuesta del servidor: cabeceras, status, body, etc. Nunca debemos subir este
    // objeto a la capa de arriba (componentes). Por tanto, debemos transformar este objeto
    // en el que realmente nos ha pedido el componente, que en este caso es 'Contacto[]'
    // para hacer esta operación nos apoyamos en la función 'map', que es un operador de los
    // objetos 'Observables'. Este operador transforma un 'Observable' en otro.
    return this._http
               .get(`${environment.uri}/contactos`)
               .map((respuesta: Response) => {
                return Contacto.nuevaColeccionDesdeJson(respuesta.json());
               });
  }

  agregarContacto(contacto: Contacto): Observable<Contacto>{

    // En aquellas peticiones HTTP que envíen datos a servidor (POST, PUT, PATCH), debemos 
    // indicarlos (los datos) como segundo parámetro de la función correspondiente. En este caso
    // estamos enviando el contacto a crear en el cuerpo de la petición 'POST'
    return this._http
                .post(`${environment.uri}/contactos`, contacto)
                .map((respuesta: Response) => {
                  return Contacto.nuevoDesdeJson(respuesta.json());
                });
  }  

  eliminarContacto(contacto: string): void {
    //Forma avanzada
    /*this.contactos = this.contactos.filter((c: string): boolean => {
      return c !== contacto;
    });*/

    //let posicion = this._contactos.indexOf(contacto);
    //this._contactos.splice(posicion, 1);
  }  

}
