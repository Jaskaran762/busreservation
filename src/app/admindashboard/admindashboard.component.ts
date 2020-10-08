import { Component, OnInit } from '@angular/core';
;



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  dropdown: any;
  search:string;
 
 
  constructor(  ) { this.dropdown = document.getElementsByClassName("dropdown-btn");}

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
  passthesearch(){
    sessionStorage.setItem("search",this.search);
    
  }

  

}
