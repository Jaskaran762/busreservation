import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './signup/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }
  register(customer : Customer) : Observable<any>{
    let url = "http://localhost:8181/registerCust";
    return this.http.post(url, customer);
  } 
}
