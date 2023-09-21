import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FacturaComponent } from './factura/pages/factura/factura.component';
import { HeaderFacturaComponent } from './factura/components/header-factura/header-factura.component';
import { DetallesFacturaComponent } from './factura/components/detalles-factura/detalles-factura.component';
import { ProductosFacturaComponent } from './factura/components/productos-factura/productos-factura.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    HeaderFacturaComponent,
    DetallesFacturaComponent,
    ProductosFacturaComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
