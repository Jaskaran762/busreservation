import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';
import { CancelBookingService } from '../cancel-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css'],
})
export class CancelBookingComponent implements OnInit {
  id: number;
  booking: Booking = new Booking();
  customer: Customer = new Customer();
  bookingId: number;
  amount: number = 500;
  data: any;
  constructor(private cancelService: CancelBookingService) {}

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('customerId'));
    this.bookingId= parseInt(sessionStorage.getItem('bookingId'));
  }

  cancel() {
    alert(
      'Your booking ' +
        this.bookingId +
        ' is cancelled and amount'+
        ' is refunded to your wallet'
    );
    this.cancelService
      .cancel(this.id, this.bookingId)
      .subscribe((response) => (this.data = response));
  }
}

export class Customer {
  id: number;
  address: string;
  dateOfBirth: Date;
  name: string;
  email: string;
  mobileNo: string;

  password: string;
}

export class Booking {
  bookingId: number;
}
