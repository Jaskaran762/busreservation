import { Component, OnInit } from '@angular/core';
import { Customer} from './Customer';
import {DatePipe} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ DatePipe ]
})
export class ProfileComponent implements OnInit {

  path:String;
  customer = new Customer("User","abc@lti.com","male",new Date("2019-01-16"),"patiala",5654568642);
  update:boolean = true;
  updateUserProfile = this.fb.group({
    name:[this.customer.name, [Validators.required]],
    email: [this.customer.email,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone: [this.customer.phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender: [this.customer.gender, [Validators.required]],
    address:[this.customer.address, Validators.required],
    dateOfBirth: [this.customer.dateOfBirth,Validators.required]
  });

  constructor(private datePipe: DatePipe,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.path = this.getPhoto();
  }

  getPhoto():String {
    if(this.customer.gender.toLowerCase()=="male")
      return"https://w0.pngwave.com/png/402/235/businessperson-computer-icons-avatar-passport-png-clip-art.png";
    if(this.customer.gender.toLowerCase()=="female")
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAYrXaibj4ekpQYBw_oDAcdb3Q8wm4cgW17Q&usqp=CAU";
  }

  updateProfile(){
    this.update = !this.update;
  }

  updateProfileChanges(){
    this.update = !this.update;
  }

  

}
