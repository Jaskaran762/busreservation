import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Route } from '../route';
import { Bus } from '../show-buses/bus';

@Component({
  selector: 'app-add-stops-for-bus',
  templateUrl: './add-stops-for-bus.component.html',
  styleUrls: ['./add-stops-for-bus.component.css']
})
export class AddStopsForBusComponent implements OnInit {
  route:Route=new Route();
  total:number;
  //public ind:number[]=[null];
 // bus:Bus;
  public routes:Route[]=[];
  public router:Route[]=[];
  counter=0;
  class='display';
  
  
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    alert(JSON.stringify(sessionStorage.getItem('bus')));
    //this.total=+sessionStorage.getItem('total');
    //alert(JSON.stringify(this.total));
   // this.addStops();
    this.route.bus=JSON.parse(sessionStorage.getItem('bus'));
    
  }

 /* addStops(){
    //alert(JSON.stringify(this.customer));
   
    
    for (this.index = 0; this.index < this.total; this.index++) {
      this.ind.push((this.index));
      
    }
  }*/
  addStopsForBuses(){

    //for (let indexing = 0; indexing < this.total; indexing++) {
      this.routes.push(this.route);
     // this.router.push(this.route);
      this.counter++;
      this.class='notDisplay';
      this.route.bus=JSON.parse(sessionStorage.getItem('bus'));
      if(this.counter>1){
        alert(JSON.stringify(this.route));
      this.service.submitBusRouteDetails(this.route).subscribe(response=>{
       alert(JSON.stringify(response)); });
      
      }
    }
    
    finalSubmit(){
      
   
    this.service.submitBusRouteDetails(this.route).subscribe(response=>{
      alert(JSON.stringify(response));
    });
   }
   removeAddress(i: number) {
    this.routes.splice(i, 1);
    
  }
  
   
  }

  

