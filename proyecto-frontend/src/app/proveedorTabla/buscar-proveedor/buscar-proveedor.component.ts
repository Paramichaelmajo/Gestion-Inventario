import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/proveedor/agregar-proveedor/proveedor.service';

@Component({
  selector: 'app-buscar-proveedor',
  templateUrl: './buscar-proveedor.component.html',
  styleUrls: ['./buscar-proveedor.component.css']
})
export class BuscarProveedorComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedores: any;

  constructor(
    public fb: FormBuilder,
    public proveedorService: ProveedorService,
  ) { }

  ngOnInit(): void {
    this.proveedorForm = this.fb.group({
      idProv: [''],
      nombreProv: ['', Validators.required],
      telefProv: ['', Validators.required],
      correoProv: ['', Validators.required],
      dirProv: ['', Validators.required],
      ciudadProv: ['', Validators.required]
    });

    this.proveedorService.getlistarProveedor().subscribe(resp =>{
      this.proveedores = resp;
    },
      error => (console.error(error))
    );
  }

  guardar(): void{
    this.proveedorService.guardarProveedor(this.proveedorForm.value).subscribe(resp =>{
      this.proveedorForm.reset();
      this.proveedores=this.proveedores.filter(proveedor => resp.idProv !== proveedor.idProv);
      this.proveedores.push(resp);
    });
  }

  eliminar(proveedor){
    this.proveedorService.eliminarProveedor(proveedor.id).subscribe(resp =>{
      if(resp === true){
        this.proveedores.pop(proveedor);
      }
    });
  }
  
  editar(proveedor){
    this.proveedorForm.setValue({
      idProv: proveedor.idProv,
      nombreProv: proveedor.nombreProv,
      telefProv: proveedor.telefProv,
      correoProv: proveedor.correoProv,
      dirProv: proveedor.dirProv,
      ciudadProv: proveedor.ciudadProv
    })
  }
}
