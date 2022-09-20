import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { IngresarProductoComponent } from './producto/ingresar-producto/ingresar-producto.component';
import { BuscarProductoComponent } from './productoTabla/buscar-producto/buscar-producto.component';
import { AgregarProveedorComponent } from './proveedor/agregar-proveedor/agregar-proveedor.component';
import { BuscarProveedorComponent } from './proveedorTabla/buscar-proveedor/buscar-proveedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';//Material angular se agrego para botones
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IngresarProductoComponent,
    BuscarProductoComponent,
    AgregarProveedorComponent,
    BuscarProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule, //aca se debe agregar 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, /*se agrego forms para validaciones, el cual utulizaremos formControl*/
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
