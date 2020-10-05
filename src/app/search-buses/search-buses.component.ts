import { Component, OnInit } from '@angular/core';
import { SearchBusDto } from './search-bus-dto';
import { Router } from '@angular/router';
import { SearchBusService } from '../search-bus.service';
import { ShowBusDto } from '../show-buses/show-bus-dto';

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {

  search : SearchBusDto = new SearchBusDto();
  showList : boolean = false;
  showBus : ShowBusDto[];
  constructor( private router : Router, private searchBusService : SearchBusService) { }

  ngOnInit(): void {
  }

  searchBuses(){
    this.showList = true;
    this.searchBusService.searchBuses(this.search).subscribe((response)=>{

     // alert(JSON.stringify(response));
      this.showBus = response;
      //sessionStorage.setItem('showBus', JSON.stringify(showBus));
      //this.router.navigate(["/showBuses"])
    })    
  }

  bus : ShowBusDto;
  show(b:ShowBusDto){
    this.bus = b;
    sessionStorage.setItem('id',String(b.id));
    sessionStorage.setItem('busName',String(b.busName));
    sessionStorage.setItem('busNumber',String(b.busNumber));
    sessionStorage.setItem('amount',String(b.amount));
    sessionStorage.setItem('status',String(b.status));
    sessionStorage.setItem('seats',String(b.seats));
    sessionStorage.setItem('type',String(b.type));
  }

  hide(){
    this.showList = false;
  }
}
