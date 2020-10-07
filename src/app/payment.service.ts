import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  pay(busId: number, customerId: number): Observable<any> {
    let url =
      'http://localhost:8181/Payment?busId=' +
      busId +
      '&customerId=' +
      customerId;
    return this.http.get(url);
  }
}
