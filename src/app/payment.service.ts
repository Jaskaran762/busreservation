import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment/payment.component';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  payment: Payment;
  constructor(private http: HttpClient) {}

  pay(payment:Payment): Observable<PaymentStatus> {
    let url = 'http://localhost:8181/Payment';
    return this.http.post<PaymentStatus>(url,payment);
  }

  getStatusById(paymentId:number): Observable<PaymentStatus> {
    let url = 'http://localhost:8181/PaymentById';
    return this.http.post<PaymentStatus>(url,paymentId);
  }
  getStatusByBookingId(bookingId:number): Observable<number>{
    let url = 'http://localhost:8181/PaymentByBookingId?bookingId='+bookingId;
    return this.http.post<number>(url,"");
  }
}

export class PaymentStatus{
  public paymentId: number;
	public status: String;
	public busName: String;
	public route: String;
	public busId: number;
	public amount: number ;
	public mobileNumber : String;
  public dateOfTravel : String ;
	public paymentDateTime: String;
	public numberOfPassengers: number;
}
