import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frequentlytravelledroutes',
 templateUrl: './frequentlytravelledroutes.component.html',
 
  styleUrls: ['./frequentlytravelledroutes.component.css']
})
export class FrequentlytravelledroutesComponent implements OnInit{

  dropdown: any;

  constructor(
    private router: Router, // inject router
   // private httpService: HttpService, // inject http service
    private fb: FormBuilder // inject form build class object
   // inject router
    
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
}
