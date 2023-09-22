import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _productos!: Producto ;


get productos(){
  return this._productos;
}

  constructor(public dialog: MatDialog) { }

  abrirModal() {
    const dialogRef = this.dialog.open(DialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._productos = result;
      } else {
        console.log('dialog close');
      }
    });
  }

}

