import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { SearchBusDto } from '../search-buses/search-bus-dto';

@Component({
  selector: 'app-booking-result',
  templateUrl: './booking-result.component.html',
  styleUrls: ['./booking-result.component.css']
})
export class BookingResultComponent implements OnInit {
  public bookingResult: Array<any> = [];
  search:string;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.search=sessionStorage.getItem("search");
    this.searchResult();
  }

  searchResult(){this.service.onSearch(this.search).subscribe(Response=>{
    this.bookingResult=Response;})

}
}
