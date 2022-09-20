import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarProveedorService {
  private API_SERVER = "http://localhost:8080/proveedor";

  constructor(private http: HttpClient) { }

  public getlistarProveedor(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }

  public guardarProveedor(proveedor:any): Observable<any>{
    return this.http.post(this.API_SERVER, proveedor);
  }
  
  public eliminarProveedorPorId(id): Observable<any>{
    return this.http.delete(this.API_SERVER + "delete/"+id);
  }
}
