import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string="User";
  dashboard:boolean=true;
  booking:boolean=false;
  profile:boolean=false;
  changepassword:boolean=false;
  wallet:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickDashBoard(){
    if(this.dashboard == false)
      this.booking = true;
    if(this.booking == true)
      this.booking = false;
    if(this.profile == true)
      this.profile = false;
    if(this.changepassword == true)
      this.changepassword = false;
    if(this.wallet == true)
      this.wallet = false;
  }

  onClickBookings(){
    if(this.booking == false)
      this.booking = true;
    if(this.dashboard == true)
      this.dashboard = false;
    if(this.profile == true)
      this.profile = false;
    if(this.changepassword == true)
      this.changepassword = false;
    if(this.wallet == true)
      this.wallet = false;
  }

  onClickProfile(){
    if(this.profile == false)
      this.profile = true;
    if(this.booking == true)
      this.booking = false;
    if(this.dashboard == true)
      this.dashboard = false;
    if(this.changepassword == true)
      this.changepassword = false;
    if(this.wallet == true)
      this.wallet = false;
  }

  onClickChangePassword(){
    if(this.changepassword == false)
      this.changepassword = true;
    if(this.booking == true)
      this.booking = false;
    if(this.profile == true)
      this.profile = false;
    if(this.dashboard == true)
      this.dashboard = false;
    if(this.wallet == true)
      this.wallet = false;
  }

  onClickWallet(){
    if(this.wallet == false)
      this.wallet = true;
    if(this.booking == true)
      this.booking = false;
    if(this.profile == true)
      this.profile = false;
    if(this.changepassword == true)
      this.changepassword = false;
    if(this.dashboard == true)
      this.dashboard = false;
  }
}
