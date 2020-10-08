import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../cancel-booking/cancel-booking.component';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-registeredcustomerbutnoreservation',
  templateUrl: './registeredcustomerbutnoreservation.component.html',
  styleUrls: ['./registeredcustomerbutnoreservation.component.css']
})
export class RegisteredcustomerbutnoreservationComponent implements OnInit {
 
  dropdown: any;
  public customerWithoutReservation:Array<Customer> = []

  constructor(private router: Router,
    private service:AdminService) { this.dropdown = document.getElementsByClassName("dropdown-btn"); }


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
    this.customersWithoutReservation();
  }
  customersWithoutReservation(){
    this.service. onCustomersWithoutBookings().subscribe(Response=>{this.customerWithoutReservation=Response;
   })
    
  }
}
