import { Component, OnInit } from '@angular/core';
import { ShowBusDto } from './show-bus-dto';
import { SearchBusService } from '../search-bus.service';
import { SearchBusDto } from '../search-buses/search-bus-dto';
import { RealDto} from '../search-bus.service';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {

  buses: ShowBusDto[];
  type: boolean;
  display: boolean=true;
  depart1: boolean;
  depart2: boolean;
  arrival1: boolean;
  arrival2: boolean;
  realDto: SearchBusDto;
  searchDto: RealDto;
  numberOfBuses: number;
  src: String;
  travelDate: String;
  source: String;
  destination: String;

  constructor(private searchBusService: SearchBusService) { }

  ngOnInit(): void { 
    
    this.numberOfBuses=0;
    this.travelDate= sessionStorage.getItem("travelDate");
    this.source= sessionStorage.getItem("source");
    this.destination= sessionStorage.getItem("destination");
    this.getSearchBusDto();
  }

  checkBus(bus:ShowBusDto){
    let flag = true;
    let date4 = new Date('01/01/2011 ' + bus.departureTime.valueOf());
    let date1 = new Date('01/01/2011 ' + bus.arrivalTime.valueOf());
    let date2 = new Date('01/01/2011 06:00:00');
    let date3 = new Date('01/01/2011 18:00:00');
    
    if(this.type==true){
      flag = bus.type=="A.C"? true:false;
    }
    if(this.depart1==true){
      if (date4 < date2 || date4 > date3) {
        flag = false;
      }
    }
    if(this.depart2==true){
      if (date4 > date2 || date4 < date3) {
        flag = false;
      }
    }
    if(this.arrival1==true){
      if (date1 < date2 || date1 > date3) {
        flag = false;
      }
    }
    if(this.arrival2==true){
      if (date1 > date2 || date1 < date3) {
        flag = false;
      }
    }
    if(flag==false){
      this.display= false;
    }
    return flag;
  }
  
  getSearchBusDto(){
    this.realDto = this.searchBusService.getDto();
    this.searchDto = new RealDto();
    this.searchDto.source= this.source;
    this.searchDto.destination=this.destination;
    this.src = String(this.searchDto.source);
    this.searchBuses();
  }

  searchBuses(){
  
    this.searchBusService.searchBuses(this.searchDto).subscribe((response)=>{
      this.buses = response;
      this.numberOfBuses=this.buses.length;
      //sessionStorage.setItem('showBus', JSON.stringify(showBus));
      //this.router.navigate(["/showBuses"])
    })    
  }

  getBusId(bus: ShowBusDto){
    
  
      sessionStorage.setItem("busId",String(bus.id));
      sessionStorage.setItem("source",String(this.source));
      sessionStorage.setItem("destination",String(this.destination));
      sessionStorage.setItem("amount",String(bus.amount));
      sessionStorage.setItem("departureTime",String(bus.departureTime));
      sessionStorage.setItem("arrivalTime",String(bus.arrivalTime));
  }
}