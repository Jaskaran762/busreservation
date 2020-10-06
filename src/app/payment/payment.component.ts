import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  amount: number = 52;
  busId: number = 3;
  data: any;
  canPay: boolean = true;
  message: string;
  customerId: number = 0;
  bookingId: number;
  clicked: boolean = false;
  notRegistered: boolean;
  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit(): void {
    this.bookingId = parseInt(sessionStorage.getItem('bookingId'));
    //this.busId = parseInt(sessionStorage.getItem('busId'));
    //this.amount = parseInt(sessionStorage.getItem('amount'));
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    console.log(this.customerId);
    if (isNaN(this.customerId)) {
      this.customerId = 0;
      this.notRegistered = true;
    } else {
      this.notRegistered = false;
    }
  }

  userForm = new FormGroup({
    card: new FormControl('', Validators.required),
  });
  pay() {
    this.paymentService
      .pay(this.busId, this.customerId)
      .subscribe((response) => (this.data = response));
    sessionStorage.setItem('paymentAmount', String(this.amount));
    this.clicked = true;
  }
}
