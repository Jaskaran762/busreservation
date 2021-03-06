import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Route } from '../route';
import {Bus} from '../bus';

@Component({
  selector: 'app-addstops',
  templateUrl: './addstops.component.html',
  styleUrls: ['./addstops.component.css']
})
export class AddstopsComponent implements OnInit {
  route:Route=new Route();
  total:number;
  bus:Bus=new Bus();
  

  public routes:Route[]=[];
  public router:Route[]=[];
  counter=0;
  class='display';

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.route.bus=this.bus;
    
  }
  addStopsForBuses(){

    //for (let indexing = 0; indexing < this.total; indexing++) {
      this.routes.push(this.route);
     // this.router.push(this.route);
      this.counter++;
      this.class='notDisplay';
      //this.route.bus=JSON.parse(sessionStorage.getItem('bus'));
      if(this.counter>1){
        
      this.service.submitBusRouteDetails(this.route).subscribe(response=>{
        });

        
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
