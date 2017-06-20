import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Contacto } from '../contacto';


@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent{

  @Output() clickGuardar = new EventEmitter<Contacto>();

  notificarContacto(formulario: FormGroup): void {
    let contacto = Contacto.nuevoDesdeJson(formulario.value);
    this.clickGuardar.emit(contacto);
    formulario.reset();
  }



}
