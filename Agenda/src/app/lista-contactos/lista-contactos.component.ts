import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent{

  //Con el decorador 'Input' exponemos atributos para 
  //que puedan enlazar datos desde otro componentes.

  @Input() datos: string[];

  //Con el decorador 'Output' exponemos eventos a otros componentes.
  //Es necesario, además, que el atributo decorado sea de tipo 'EventEmitter<T>'.

  @Output() clickEliminar = new EventEmitter<string>();

  //Para emitir datos, usamos la función 'emit' del 'EventEmitter'.
  //datos: String indica el tipo que recibe
  //:void indica que la función no retorna nada

  notificarEliminacion(dato: string): void {
    this.clickEliminar.emit(dato);
  }

  esGatesWozniak(contacto: string): boolean {
    return contacto.indexOf('Gates') > -1 || 
            contacto.indexOf('Wozniak') > -1;
  }

  esCookMusk(contacto: string): string{
    return contacto.indexOf('Cook') > -1 || 
            contacto.indexOf('Musk') > -1 ? '32px' : '14px';
  }
}
