import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-mostpreferredtypeofbuses',
  templateUrl: './mostpreferredtypeofbuses.component.html',
  styleUrls: ['./mostpreferredtypeofbuses.component.css']
})
export class MostpreferredtypeofbusesComponent implements OnInit {

  dropdown: any;
  public mostPreferredBus:Array<any> = []

  constructor(private router: Router,private service:AdminService
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
  mostPreferredBuses(){
    this.service. onmostPreferredBuses().subscribe(Response=>{this.mostPreferredBus=Response;
    alert(JSON.stringify(this.mostPreferredBus))})
    

  }
}
