import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

@Component({
  //En 'selector' indicamos el elemento HTML donde se instanciará este componente.
  selector: 'app-root',
  //En 'templateUrl' indicamos la ruta al template del componente.
  //Podríamos escribirlo inline en la propiedad 'template'.
  templateUrl: './app.component.html',
  //En 'styleUrls' indicamos las rutas de los documentos CSS que contienen 
  //los estilos que afectan a este componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
