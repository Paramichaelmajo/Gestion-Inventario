import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient   } from '@angular/common/http';
//importante
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private API_SERVER = 'http://localhost:8080/proveedor';
  
  constructor(private http: HttpClient) { }

  public getlistarProveedor(): Observable<any>{
    return this.http.get(this.API_SERVER);//quizas vaya en proveedor tabla
  }
  
  public guardarProveedor(proveedor:any): Observable<any>{
    return this.http.post(this.API_SERVER,proveedor);

  }

  public eliminarProveedor(id): Observable<any>{
    return this.http.delete(this.API_SERVER + "delete/"+id)
  }
}
