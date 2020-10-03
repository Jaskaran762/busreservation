import { Component, OnInit } from '@angular/core';
import { Customer } from '../profile/Customer';
import { ProfileStatus, ProfileService } from '../profile.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  customer= new Customer();
  id:number;
  profileStatus: ProfileStatus;
  updateUserProfile = this.fb.group({
    name:[this.customer.name, [Validators.required]],
    email: [this.customer.email,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    mobileNo: [this.customer.mobileNo, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender: ['Male'],
    address:[this.customer.address, Validators.required],
    dateOfBirth: [this.customer.dateOfBirth,Validators.required]
  });
  constructor(private fb: FormBuilder,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.id= parseInt(sessionStorage.getItem("customerId"));
    this.profileService.getProfile(this.id).subscribe(response=>{
      this.customer=response;
      this.setDefaultForm();
    })
  }

  setDefaultForm(){
    this.updateUserProfile.setValue({
      name: this.customer.name,
      email: this.customer.email,
      mobileNo: this.customer.mobileNo,
      gender: this.customer.gender,
      address: this.customer.address,
      dateOfBirth: this.customer.dateOfBirth
    });
  }

  updateProfileChanges(){
    this.customer.name=this.updateUserProfile.get('name').value;
    this.customer.address=this.updateUserProfile.get('address').value;
    this.customer.dateOfBirth=this.updateUserProfile.get('dateOfBirth').value;
    this.customer.email=this.updateUserProfile.get('email').value;
    this.customer.mobileNo=this.updateUserProfile.get('mobileNo').value;
    this.customer.gender=this.updateUserProfile.get('gender').value;
  
    this.profileService.updateProfile(this.customer).subscribe(response=>{
      this.profileStatus=response;
      this.getProfile();
      alert(JSON.stringify(this.profileStatus));
    })
  }

}
