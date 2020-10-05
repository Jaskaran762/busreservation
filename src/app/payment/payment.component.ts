import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  booking_id: number;
  amount: number;
  constructor() {}

  ngOnInit(): void {
    this.booking_id = parseInt(sessionStorage.getItem('bookingId'));
    this.amount = parseInt(sessionStorage.getItem('amount'));
  }
}
