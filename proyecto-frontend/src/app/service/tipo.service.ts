import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private API_SERVER = "http://localhost:8080/tipo";

  constructor(private http: HttpClient) { }

  public getAllTipos(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }
}
