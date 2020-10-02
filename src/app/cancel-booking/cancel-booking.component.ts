import { Component, OnInit } from '@angular/core';
import { CancelBookingService } from '../cancel-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css'],
})
export class CancelBookingComponent implements OnInit {
  id: string;
  booking: Booking = new Booking();
  customer: Customer = new Customer();
  amount: number = 800;
  data: any;
  constructor(private cancelService: CancelBookingService) {}

  ngOnInit(): void {
    this.id = sessionStorage.getItem('customerId');
  }

  cancel() {
    alert(
      'Your booking ' +
        1 +
        ' is cancelled.  Rs.' +
        this.amount +
        ' is refunded to your wallet'
    );
    this.cancelService
      .cancel(this.customer)
      .subscribe((response) => (this.data = response));
  }
}

export class Customer {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class Booking {
  bookingId: number;
}
