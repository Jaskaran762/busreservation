import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordValidator } from './password.validation';
import { Signup } from './signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  get fullname(){
    return this.signupForm.get('fullname')
  }

  get uname(){
    return this.signupForm.get('uname')
  }

  get email(){
    return this.signupForm.get('email')
  }

  get password(){
    return this.signupForm.get('password')
  }

  get mobile(){
    return this.signupForm.get('mobile')
  }

  get address(){
    return this.signupForm.get('address')
  }



  signupForm : FormGroup
  constructor(private router: Router, private fb: FormBuilder)
  { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      //full name 
      fullname: ['', [Validators.required, Validators.minLength(5), Validators.pattern]],

      //email validation
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],

      //password validation
      password: ['', [Validators.required, Validators.minLength(8)]],

      //confirm password
      confirmPassword : ['', [Validators.required]],

      // Phone number validation
      mobile: ['', [Validators.required, Validators.minLength(10)]]
    },
    {validator: PasswordValidator});
    
  }

  search : Signup = new Signup()

  onSignupClick() : void{
    if(this.signupForm.valid){
      this.router.navigate(["/"])
    }
    else{
      alert('Please enter valid details')
    }
  }

}
