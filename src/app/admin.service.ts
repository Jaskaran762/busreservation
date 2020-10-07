import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrequentRoutes } from './frequent-routes';
import { Observable, Subject } from 'rxjs';
import { Customer } from './cancel-booking/cancel-booking.component';
import { Bus } from './bus';
import { Route } from './route';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  
 
 
  private totalSource=new Subject<Number>();
  totalstop$=this.totalSource.asObservable;

  constructor( private http : HttpClient) { }
  onfrequentRoutes() : Observable<any[]>{
    let url = "http://localhost:8181//frequentlytravelledroutes";
    return this.http.post<any[]>(url,"");
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
    let url = "http://localhost:8181//lastmonthrecordsandprofit?month="+n;
    return this.http.get<number>(url);
  }
  
  submitBusRouteDetails( routes:Route) : Observable<any>{
    let bus=JSON.parse(sessionStorage.bus);
   
    let url = "http://localhost:8181/addrouteforbus";
    
    return this.http.post(url,routes);
  }
  submitBusDetails(bus:Bus){
    let url = "http://localhost:8181/addbus";
    return this.http.post(url,bus);

  }
  onLastMonthDetails() : Observable<any[]>{
    let url = "http://localhost:8181/bookingDetailsByMonth";
    return this.http.post<any[]>(url,"");
  }
  onAnnualDetails() : Observable<any[]>{
    let url = "http://localhost:8181//bookingDetailsByYear";
    return this.http.post<any[]>(url,"");
  }
  
 
}

