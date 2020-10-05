import { Component, OnInit } from '@angular/core';
import { Customer} from './Customer';
import {DatePipe} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';
import { ProfileService, ProfileStatus } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ DatePipe ]
})
export class ProfileComponent implements OnInit {

  path:String;
  customer= new Customer();
  id:number;
  update:boolean =true;


  constructor(private datePipe: DatePipe,private fb: FormBuilder,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getPhoto(gender:String) {
    if(gender=="Male"){
      this.path="https://w0.pngwave.com/png/402/235/businessperson-computer-icons-avatar-passport-png-clip-art.png";
    }
    if(gender=="Female")
      this.path="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAYrXaibj4ekpQYBw_oDAcdb3Q8wm4cgW17Q&usqp=CAU";
  }

  getCustPhoto(){
    this.path = "http://localhost:8181/downloads/"+this.customer.profilePic;
  }
  getProfile(){
    this.id= parseInt(sessionStorage.getItem("customerId"));
    this.profileService.getProfile(this.id).subscribe(response=>{
      this.customer=response;
      if(this.customer.profilePic!=null){
        this.getCustPhoto();
      }
      else{
      this.getPhoto(this.customer.gender);
      }
    })
  }
}