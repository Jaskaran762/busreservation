import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SearchBusDto } from './search-bus-dto';
import { Router } from '@angular/router';
import { SearchBusService } from '../search-bus.service';
import { ShowBusDto } from '../show-buses/show-bus-dto';
import { Capabilities } from 'protractor';

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {

  search : SearchBusDto = new SearchBusDto();
  searchForm : FormGroup;
  showList : boolean = false;
  showBus : ShowBusDto[];
  stops : {};
  travelDate: String =new Date().toLocaleDateString();;
  fromDate: Date = new Date();

  constructor( private router : Router, private searchBusService : SearchBusService, private fb: FormBuilder){ }

  get Src(){
    return this.searchForm.get("src");
  }

  get Dst(){
    return this.searchForm.get("dst");
  }

  

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      // for source validation
        src: ['', [Validators.required]],

      //for destination validation
        dst: ['', [Validators.required]]
    });

    this.searchBusService.listStops().subscribe((data) => {
      this.stops= data
    });

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
    sessionStorage.setItem('source',String(this.search.source));
    sessionStorage.setItem('destination', String(this.search.destination));
    sessionStorage.setItem('travelDate', String(this.travelDate));

    sessionStorage.setItem('id',String(b.id));
    sessionStorage.setItem('busName',String(b.busName));
    sessionStorage.setItem('busNumber',String(b.busNumber));
    sessionStorage.setItem('amount',String(b.amount));
    sessionStorage.setItem('status',String(b.status));
    sessionStorage.setItem('seats',String(b.seats));
    sessionStorage.setItem('type',String(b.type));
  }

  sendDto(){
    this.searchBusService.sendBusDto(this.search);
    sessionStorage.setItem('source',String(this.search.source));
    sessionStorage.setItem('destination', String(this.search.destination));
    alert(this.travelDate);
    sessionStorage.setItem('travelDate', String(this.travelDate));
  }
}
