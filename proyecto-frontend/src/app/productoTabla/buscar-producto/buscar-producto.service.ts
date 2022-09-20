import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductoService {
  private API_SERVER = "http://localhost:8080/producto";

  constructor(private http: HttpClient) { }

  public getlistarProductos(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }

  public guardarProducto(producto:any): Observable<any>{
    return this.http.post(this.API_SERVER, producto);
  }

  public borrarProducto(id): Observable<any>{
    return this.http.delete(this.API_SERVER + "delete/"+id);
  }
}
