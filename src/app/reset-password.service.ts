import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {}

  reset(
    customerId: number,
    oldPassword: string,
    newPassword: string
  ): Observable<any> {
    let url =
      'http://localhost:8181/resetPassword?&customerId=' +
      customerId +
      '&oldPassword=' +
      oldPassword +
      '&newPassword=' +
      newPassword;
    return this.http.get(url);
  }

  setPassword(customerId: number, newPassword: string): Observable<any> {
    let url =
      'http://localhost:8181/setPassword?&customerId=' +
      customerId +
      '&newPassword=' +
      newPassword;
    return this.http.get(url);
  }

  searchCustomer(email: string): Observable<any> {
    let url = 'http://localhost:8181/searchCustomer?&email=' + email;
    return this.http.get(url);
  }

  mail(customerId: number): Observable<any> {
    let url = 'http://localhost:8181/forgotPassword?&customerId=' + customerId;
    return this.http.get(url);
  }
}
