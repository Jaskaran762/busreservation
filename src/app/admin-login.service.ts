import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login/login';
import { AdminStatus } from './admin-login/status';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http : HttpClient) { }

  onLogin(adminLogin : AdminLogin) : Observable<AdminStatus>{
    let url = "http://localhost:8181/adminLogin";
    return this.http.post<AdminStatus>(url, adminLogin)
  }
}
