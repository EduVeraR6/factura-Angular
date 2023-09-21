import { Component } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';
import { DialogService } from '../../services/dialog.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';


@Component({
  selector: 'app-productos-factura',
  templateUrl: './productos-factura.component.html',
  styleUrls: ['./productos-factura.component.css']
})
export class ProductosFacturaComponent {

  productos:Producto[]=[
    {
      codigo: 1241  ,descripcion:"Coca Cola"   ,cantidad: 1,precio: 20
    },
    {
      codigo: 2321  ,descripcion:"Pepsi"   ,cantidad: 2,precio: 40
    },
    {
      codigo: 3123  ,descripcion:"Galleta"   ,cantidad: 1,precio: 20
    }
  ]


  constructor(public dialog: MatDialog) {}


sumaTotal(){
  let total=this.productos.reduce((acumulador,producto)=>{return acumulador+ producto.precio*producto.cantidad},0);
  return total
}

abrirModal() {
  const dialogRef = this.dialog.open(DialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.productos.push(result);
    } else {
      console.log('dialog close');
    }
  });
}

deleteProduct(producto: any) {
  const index = this.productos.indexOf(producto);
  if (index !== -1) {
    this.productos.splice(index, 1); 
  }
}

}
