import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent{

  //Con el decorador 'Input' exponemos atributos para 
  //que puedan enlazar datos desde otro componentes.

  @Input() datos: Contacto[];

  //Con el decorador 'Output' exponemos eventos a otros componentes.
  //Es necesario, además, que el atributo decorado sea de tipo 'EventEmitter<T>'.

  @Output() clickEliminar = new EventEmitter<Contacto>();

  //Para emitir datos, usamos la función 'emit' del 'EventEmitter'.
  //datos: String indica el tipo que recibe
  //:void indica que la función no retorna nada

  notificarEliminacion(dato: Contacto): void {
    this.clickEliminar.emit(dato);
  }
}
