import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mostpreferredtypeofbuses',
  templateUrl: './mostpreferredtypeofbuses.component.html',
  styleUrls: ['./mostpreferredtypeofbuses.component.css']
})
export class MostpreferredtypeofbusesComponent implements OnInit {

  dropdown: any;

  constructor(private router: Router) { this.dropdown = document.getElementsByClassName("dropdown-btn"); }


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
