import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-lastmonthrecordsandprofit',
  templateUrl: './lastmonthrecordsandprofit.component.html',
  styleUrls: ['./lastmonthrecordsandprofit.component.css']
})
export class LastmonthrecordsandprofitComponent implements OnInit {

  dropdown: any;
  profit: number;
  month:number;
  constructor(
    private router: Router,
    private service:AdminService
  ) { this.dropdown = document.getElementsByClassName("dropdown-btn"); }


  ngOnInit(): void {
    for (var i = 0; i < this.dropdown.length; i++) {
      this.dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
   
  
    }
    profitInAMonth(){
      this.service. onProfitInAMonth(this.month).subscribe(Response=>{this.profit=Response;
      alert(JSON.stringify(this.profit))})
      
  }
}

