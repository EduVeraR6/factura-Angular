import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/factura/interfaces/productos.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
 
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<DialogComponent>) {

    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

 saveData() {
    if (this.form.valid) {
      const datosGuardados = this.form.value;
      this.dialogRef.close(datosGuardados);
    } else {  
      alert("Complete todos los campos correctamente.")
    }
  }


}
