import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {

  contactos: string[];

  ngOnInit(){
      this.contactos = [
        'Tim Cook',
        'Bill Gates',
        'Elon Musk',
        'Steve Wozniak',
        'Sundar Pichai'
    ];
  }

  eliminarContacto(contacto: string): void {
    //Forma avanzada
    /*this.contactos = this.contactos.filter((c: string): boolean => {
      return c !== contacto;
    });*/

    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
  }
}
