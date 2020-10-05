import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  show : boolean;
  constructor() {
   }

  ngOnInit(): void {
    if(sessionStorage.getItem('customerId')){
      this.show = false;
    }
    else{
      this.show = true;
    }
  }




  
}
