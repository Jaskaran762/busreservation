import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-annual-details',
  templateUrl: './annual-details.component.html',
  styleUrls: ['./annual-details.component.css']
})
export class AnnualDetailsComponent implements OnInit {

  public annualDetails:Array<any> = [];
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.annualDetail();
  }
 
  
  annualDetail(){
    this.service.onAnnualDetails().subscribe(Response=>{this.annualDetails=Response;
   })
}
}
