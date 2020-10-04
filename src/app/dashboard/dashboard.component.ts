import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:String="User";
  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getUser();
  }
  clearSession(){
    sessionStorage.clear();
  }
  getUser(){
    this.profileService.getUserName(parseInt(sessionStorage.getItem("customerId")))
    .subscribe(results =>this.username = results);
  }
}
// this is a push for git

