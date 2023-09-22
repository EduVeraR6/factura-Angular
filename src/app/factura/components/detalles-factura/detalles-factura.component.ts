import { Component } from '@angular/core';

interface Cliente {
  cliente: string;

  empresa: string;

  direccion: string;

  telefono: string;
}

@Component({
  selector: 'app-detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.css'],
})
export class DetallesFacturaComponent {

  detalles : Cliente = {
    cliente:'Eduardo',
    empresa : 'Viamatica',
    direccion : "Bolivar y 6 de marzo",
    telefono : "123123"
  }


}
