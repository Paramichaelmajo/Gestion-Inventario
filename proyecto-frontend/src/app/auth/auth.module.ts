
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthRoutingModule } from './auth-routing.module';
//import { RegisterComponent } from './register/register.component';
//import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';


//me daba error le saque el autlogin en declarationy en la importacion
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
   // AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]

})
export class AuthModule { }
