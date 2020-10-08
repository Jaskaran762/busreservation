import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-monthly-details',
  templateUrl: './monthly-details.component.html',
  styleUrls: ['./monthly-details.component.css']
})
export class MonthlyDetailsComponent implements OnInit {

  public lastMonthDetails:Array<any> = [];
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.monthlyDetails();
  }
  monthlyDetails(){
    this.service.onLastMonthDetails().subscribe(Response=>{this.lastMonthDetails=Response;
    alert(JSON.stringify(this.lastMonthDetails))})
    

  }

}
