import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './cancel-booking/cancel-booking.component';

@Injectable({
  providedIn: 'root',
})
export class CancelBookingService {
  constructor(private http: HttpClient) {}

  cancel(customer: Customer): Observable<any> {
    let url = 'http://localhost:8181/cancel';
    return this.http.post(url, customer);
  }
}
