import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login/login';
import { LoginStatus } from './login/loginStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient) { }
  onLogin(login : Login) : Observable<LoginStatus>{
    let url = "http://localhost:8081/loginCustomer";
    return this.http.post<LoginStatus>(url, login)
  }
}
