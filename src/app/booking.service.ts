import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  showBookings(customerId:number): Observable<Booking[]>{
    let url = "http://localhost:8181/showBookings?customerId="+customerId;
    return this.http.post<Booking[]>(url,"");
  }
}
