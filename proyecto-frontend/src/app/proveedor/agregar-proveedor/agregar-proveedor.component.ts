import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedores: any;

  constructor(
    public fb: FormBuilder,
    public proveedorService: ProveedorService
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
    // Esta para probar cosas igual que lo de arriba
    this.proveedorService.getlistarProveedor().subscribe(resp=> {
      this.proveedores = resp;
    },
      error => (console.error(error))
    );
  }

  guardar(): void{
    this.proveedorService.guardarProveedor(this.proveedorForm.value).subscribe(resp =>{
      this.proveedorForm.reset();
      this.proveedores = this.proveedores.filter(proveedor => resp.idProv !==proveedor.idProv);
      this.proveedores.push(resp);
    },
      error => { console.error(error) }
    );
  }
}
