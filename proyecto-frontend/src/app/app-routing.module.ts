import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IngresarProductoComponent } from './producto/ingresar-producto/ingresar-producto.component';
import { BuscarProductoComponent } from './productoTabla/buscar-producto/buscar-producto.component';//Importaciones
import { AgregarProveedorComponent } from './proveedor/agregar-proveedor/agregar-proveedor.component';
import { BuscarProveedorComponent } from './proveedorTabla/buscar-proveedor/buscar-proveedor.component';


const routes: Routes = [
  //[path: '', redirectTo: '/auth', pathMatch: 'full'},
  //{path: 'auth', loadChildren: '.auth/AuthModule#AuthModule'}

  {path: 'Login', component: LoginComponent},  // login
  {path: '', redirectTo: 'Login', pathMatch:'full'}, 
  {path: 'Producto', component: IngresarProductoComponent},// producto
  {path: 'ProductoTabla', component: BuscarProductoComponent },//tabla de producto
  {path: 'Proveedor', component: AgregarProveedorComponent},//agregar proveedor
  {path: 'ProveedorTabla', component: BuscarProveedorComponent}// tabla proveedor
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
