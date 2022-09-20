import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private API_SERVER = 'http://localhost:8080/producto';//conexion con backend y angular

  constructor(private http: HttpClient) { }
  //estos metodos estan el en backend de springboot, especificamente en el controlador
  public getlistarProductos(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }//este medoto de aca va para la tabla de buscar producto, lo puse para probar
  
  public guardarProducto(producto:any): Observable<any>{
    return this.http.post(this.API_SERVER, producto);
  }

  public borrarProducto(id):Observable<any>{
    return this.http.delete(this.API_SERVER + "delete/"+id)
  }
}



