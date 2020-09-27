import { Component, OnInit } from '@angular/core';
import {Booking} from './Booking';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  public bookings: Array<Booking> = [];
  constructor() { }

  ngOnInit(): void {
    this.bookings.push(new Booking(1,"Lovely Travels",23,"Patiala","Jalandhar",new Date(12,2,2012),"5:45",4));
    this.bookings.push(new Booking(2,"Lovely Travels",24,"Patiala","Jalandhar",new Date(12,2,2012),"6:00",4));
  }

  getBookings(){
    
  }

}
