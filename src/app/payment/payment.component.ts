import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService, PaymentStatus } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  mobileNo: number;
  amount: number;
  busId: number = 3;
  data: PaymentStatus;
  canPay: boolean = true;
  message: string;
  customerId: number = 0;
  bookingId: number;
  clicked: boolean = false;
  notRegistered: boolean;
  payment: Payment;
  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit(): void {
    this.bookingId = parseInt(sessionStorage.getItem('bookingId'));
    //this.busId = parseInt(sessionStorage.getItem('busId'));
    //this.amount = parseInt(sessionStorage.getItem('amount'));
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.amount = parseInt(sessionStorage.getItem("amount"));
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
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*'),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern('[0-9]*'),
    ]),
  });

  get c() {
    return this.userForm.controls;
  }
  pay() {
    this.payment = new Payment();
    this.payment.amount = this.amount;
    this.payment.bookingId= this.bookingId;
    this.payment.busId = this.busId;
    this.payment.customerId = this.customerId;
    alert(JSON.stringify(this.payment));
    this.paymentService.pay(this.payment).subscribe(response=>{
      this.data = response;
      alert(response);
      sessionStorage.setItem("paymentId",String(response.paymentId));
    })
    this.clicked = true;
    console.log(this.mobileNo);
  }
}
export class Payment{
  busId: number;
  customerId: number;
  bookingId: number;
  amount: number;
}