import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/proveedor/agregar-proveedor/proveedor.service';
import { TipoService } from 'src/app/service/tipo.service';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-ingresar-producto',
  templateUrl: './ingresar-producto.component.html',
  styleUrls: ['./ingresar-producto.component.css']
})
export class IngresarProductoComponent implements OnInit {
  /*Para ir iterando*/
  productoForm: FormGroup;
  productos: any;
  proveedores: any;
  tipos: any;

  constructor(
    public fb: FormBuilder,
    public productoService: ProductoService,
    public proveedorService: ProveedorService,
    public tipoService: TipoService
  ) { }

  ngOnInit(): void {
    /*Al crearlo en proveedor se me fueron ciertos errores que aparecian en consola.
      Por lo visto los metodos para buscar X se tienen que agregar para ver donde se guardaran segun la lista
    */
    this.productoForm = this.fb.group({
      prodId: [''],
      prodCod: ['', Validators.required],
      prodPrecio: ['', Validators.required],
      prodNombre: ['', Validators.required],
      proveedor: ['', Validators.required],
      tipo: ['', Validators.required]
    });

    //Obtener Proveedores //se tiene que llamar como el listarProveedor de backend
    this.proveedorService.getlistarProveedor().subscribe(resp => {
      this.proveedores = resp;
    },
      error => (console.error(error))
    );
    //Obtener productos //se tiene que llamar como el listarproducto de backend
    this.productoService.getlistarProductos().subscribe(resp => {
      this.productos = resp;
    },
      error => (console.error(error))
    );

    this.tipoService.getAllTipos().subscribe(resp => {
      this.tipos = resp;
    }, 
      error => (console.error(error))
    );
  }
  //Guardar Producto
  guardarProducto(): void {//El guardarProducto se tiene que llamar como el guardar de backend
    this.productoService.guardarProducto(this.productoForm.value).subscribe(resp => {
      this.productoForm.reset();
      this.productos = this.productos.filter(producto => resp.prodId !== producto.prodId);
      this.productos.push(resp);
    },
      error => { console.error(error) }
    );
  }

}
