import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  public bookings: Array<Booking> = [];
  customerId: number;
  class:String="button";
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }
  showCancelOrNot(dateOfTravel:String,bookId:number) {
    let date: Date = new Date();
    let bookingDate = new Date(dateOfTravel.valueOf());
    if (date >= bookingDate){
      sessionStorage.setItem('bookingId', String(bookId));
      return true;
    }
    else
      return false;
  }

  getBookings() {
    this.customerId = parseInt(sessionStorage.getItem("customerId"));
    this.bookingService.showBookings(this.customerId).subscribe(response => {
      this.bookings = response;
      //alert(JSON.stringify(this.bookings));
    })
  }

}
