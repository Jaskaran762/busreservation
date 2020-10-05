import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './cancel-booking/cancel-booking.component';

@Injectable({
  providedIn: 'root',
})
export class CancelBookingService {
  constructor(private http: HttpClient) {}

  cancel(id: number, bookingId: number): Observable<any> {
    let url =
      'http://localhost:8181/cancel?customerId=' +
      id +
      '&bookingId=' +
      bookingId;
    return this.http.get(url);
  }
}
