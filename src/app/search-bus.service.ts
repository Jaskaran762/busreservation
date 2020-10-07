import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchBusDto } from './search-buses/search-bus-dto';
import { ShowBusDto } from './show-buses/show-bus-dto';
import { Booking } from './passenger/Booking';
import { Passenger } from './passenger/Passenger';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  private dto : SearchBusDto;

  constructor(private http : HttpClient) { }

  searchBuses(searhBusDto : RealDto) : Observable<ShowBusDto[]>{
    let url = 'http://localhost:8181/searchBuses';
    return this.http.post<ShowBusDto[]>(url, searhBusDto);
  }

  sendBusDto(searchBusDto: SearchBusDto){
    this.dto = searchBusDto;
  }

  getDto(): SearchBusDto{
    return this.dto;
  }

  listStops(){
    let url = 'http://localhost:8181/stopsList';
    return this.http.get(url);
  }

  saveBookingandPassengers(booking:Booking) : Observable<BookingStatus>{
    let url = 'http://localhost:8181/saveBookings';
  
  return this.http.post<BookingStatus>(url,booking);

  }
}

export class RealDto{
  public source: String;
  public destination: String;
}
export class BookingStatus{
  message: String;
  status: String;
  bookingId : number;
}
export class MergedBooking{
  booking: Booking;
  passengers: Passenger[];
}