import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
  dropdown: any;
  bus:Bus=new Bus();
  total:number=null;
  constructor(private service:AdminService) {this.dropdown = document.getElementsByClassName("dropdown-btn"); }

  ngOnInit(): void {for (var i = 0; i < this.dropdown.length; i++) {
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
  addBus(){
    //alert(JSON.stringify(this.customer));
    this.service.submitBusDetails(this.bus).subscribe(response=>{
      alert(JSON.stringify(response));});
    
    //sessionStorage.setItem('total', String(this.total));
    sessionStorage.bus=JSON.stringify({ busName: this.bus.busName,
      busNumber:this.bus.busNumber,
      amount:this.bus.amount,
      seats:this.bus.seats,
      status:this.bus.status,
      type:this.bus.type})
  }
  

}


