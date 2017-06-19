import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent{

  @Output() clickGuardar = new EventEmitter<string>();

  notificarContacto(formulario: FormGroup): void {
    this.clickGuardar.emit(formulario.value.nombre);
  }

}
