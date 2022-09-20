import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any ={};


  ngOnInit(): void {
  }

  login(){
    let formulario:any = document.getElementById("login");
    let formularioValido:boolean = formulario.reportValidity();
  
  }

  iniciarSesion(resultado:any){


  }
  loginService(){
    var httpOptions = ({
      'Content-Type': 'application/json',
    })
  }

}
