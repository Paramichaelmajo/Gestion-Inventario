import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/producto/ingresar-producto/producto.service';
import { ProveedorService } from 'src/app/proveedor/agregar-proveedor/proveedor.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  productoTablaForm: FormGroup;
  productos: any;
  proveedores: any;
  tipo:any;
  /*Falta crear el servicio de tipo para poder traer el nombre y ademas poder agregarlo
    en agregar producto en el radio button  
  */
  constructor(
    public fb: FormBuilder,
    public productoService: ProductoService,
    public proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.productoTablaForm = this.fb.group({
      prodId: [''],
      prodCod: ['', Validators.required],
      prodPrecio: ['', Validators.required],
      prodNombre: ['', Validators.required],
      proveedor: ['', Validators.required],
      tipo: ['', Validators.required]
    });
    
    this.productoService.getlistarProductos().subscribe(resp =>{
      this.productos = resp;
    },
      error => (console.error(error))
    );

    this.proveedorService.getlistarProveedor().subscribe(resp =>{
      this.proveedores = resp;
    },
      error => (console.error(error))
    );
  }

  guardar(): void {
    this.productoService.guardarProducto(this.productoTablaForm.value).subscribe(resp => {
      this.productoTablaForm.reset();
      this.productos=this.productos.filter(producto => resp.prodId !== producto.prodId);
      this.productos.push(resp);
    },
      error => { console.error(error) }
    );
  }

  eliminar(producto){
    this.productoService.borrarProducto(producto.prodId).subscribe(resp => {
      if(resp === true){
        this.productos.pop(producto);
      }
    });
  }

  editar(producto){
    this.productoTablaForm.setValue({
      prodId: producto.prodId,
      prodCod: producto.prodCod,
      prodPrecio: producto.prodPrecio,
      prodNombre: producto.prodNombre,
      idProv: producto.idProv,
      tipoId: producto.tipoId
    });
  }
}



