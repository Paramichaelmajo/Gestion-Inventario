import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080/login";
  constructor(private httpClient: HttpClient) { } 

  login(login: Login): Observable<object> {
    console.log(login);
    return this.httpClient.post(`${this.baseUrl}`, login);    
    
  }

}
