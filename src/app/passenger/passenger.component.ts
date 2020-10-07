import { Component, OnInit } from '@angular/core';
import { Passenger } from './Passenger';
import { Booking } from './Booking';
import { Router } from '@angular/router';
import { SearchBusService, MergedBooking } from '../search-bus.service';
import { SearchBusDto } from '../search-buses/search-bus-dto';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  numberOfPassengers: number;
  name: String;
  age: number;
  address: String;
  gender: String = 'Male';
  panCard: String;
  mobileNumber: String;
  show: boolean;
  clazz: String = "";
  error: boolean = false;
  dummies: Dummy[] = new Array();
  passengers: Passenger[] = new Array();;
  booking: Booking;

  checkout: boolean = false;
  editForm: boolean = false;
  holla: boolean =true;

  passenger: Passenger;
  searchDto: SearchBusDto;
  mergedBooking: MergedBooking;

  constructor(private router: Router, private searchBusService: SearchBusService) { }

  ngOnInit(): void {

  }

  getCollection() {
    for (let index = 0; index < this.numberOfPassengers; index++) {
      let dummy = new Dummy();
      dummy.value = index;
      dummy.showDummy = true;
      this.dummies.push(dummy);
      this.holla= false;
    }
  }

  savePassenger(element: Dummy) {
    let passenger = new Passenger();
    passenger.address = this.address;
    passenger.age = this.age;
    passenger.gender = this.gender;
    passenger.name = this.name;
    this.address = '';
    this.age = 0;
    this.gender = 'Male';
    this.name = '';
    this.passengers.push(passenger);
    element.showDummy = false;

  }

  submitPassengers() {
    if (this.passengers.length != this.dummies.length) {
      this.error = true;
    }
    else {
      this.checkout = true;
    }
  }

  editPassengerRequest(pas: Passenger) {
    this.passenger = pas;
    this.editForm = true;
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] == pas) {
        this.passengers.splice(i, 1);
      }
    }
    this.address = '';
    this.age = 0;
    this.gender = 'Male';
    this.name = '';
  }

  editPassenger() {
    this.passenger = new Passenger();
    this.passenger.name = this.name;
    this.passenger.gender = this.gender;
    this.passenger.age = this.age;
    this.passenger.address = this.address;
    this.passengers.push(this.passenger);
    this.editForm = !this.editForm;
  }
  getDto() {
    this.searchDto = this.searchBusService.getDto();
  }
  saveBooking() {
    this.getDto();
    this.booking = new Booking();
    this.booking.seatsBooked = this.passengers.length;
    this.booking.status = "Pending";
    this.booking.travelRoute = this.searchDto.source + " to " + this.searchDto.destination;
    this.booking.dateOfTravel = this.searchDto.travelDate;
    this.booking.panCard = this.panCard;
    this.booking.mobileNumber = this.mobileNumber;
    this.booking.passengers = this.passengers;
    if (!isNaN(parseInt(sessionStorage.getItem('customerId')))) {
      this.booking.customerId = parseInt(sessionStorage.getItem('customerId'));
    }
    if (!isNaN(parseInt(sessionStorage.getItem('busId')))) {
      this.booking.busId = parseInt(sessionStorage.getItem('busId'));
    }
    alert(JSON.stringify(this.booking));
    this.searchBusService.saveBookingandPassengers(this.booking).subscribe(response => {
      
    });
    this.router.navigateByUrl('/payment');
  }
}
export class Dummy {
  value: number;
  showDummy: boolean;
}