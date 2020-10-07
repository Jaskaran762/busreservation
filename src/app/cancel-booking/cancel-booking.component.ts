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
  clicked: boolean;
  notRegistered: boolean;
  registered: boolean;
  status: boolean;
  booking: Booking = new Booking();
  bookingId: number;
  amount: number = 500;
  data: Data = new Data();
  constructor(private cancelService: CancelBookingService) {}

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('customerId'));
    this.bookingId = parseInt(sessionStorage.getItem('bookingId'));
    if (isNaN(this.id)) {
      this.notRegistered = true;
    } else {
      this.registered = true;
    }
  }

  cancel() {
    this.clicked = true;
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
export class Data {
  status: boolean;
  statusMessage: string;
  customerId: number;
}
export class Booking {
  bookingId: number;
}
