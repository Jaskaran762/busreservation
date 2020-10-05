import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrequentRoutes } from './frequent-routes';
import { Observable } from 'rxjs';
import { Customer } from './cancel-booking/cancel-booking.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor( private http : HttpClient) { }
  onfrequentRoutes() : Observable<FrequentRoutes[]>{
    let url = "http://localhost:8181//frequentlytravelledroutes";
    return this.http.post<FrequentRoutes[]>(url,"");
  }

  onCustomersWithoutBookings() : Observable<Customer[]>{
    let url = "http://localhost:8181/customerswithoutbooking";
    return this.http.post<Customer[]>(url,"");
  }
  
  onmostPreferredBuses() : Observable<any[]>{
    let url = "http://localhost:8181/mostpreferredtypeofbuses";
    return this.http.post<any[]>(url,"");
  }
  onProfitInAMonth(n:number) : Observable<number>{
    let url = "http://localhost:9292//lastmonthrecordsandprofit"+n;
    return this.http.get<number>(url);
  }

}
