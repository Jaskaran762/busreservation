import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Login } from './login';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login Page";
  LoginForm : FormGroup;
  submitted = false;

  get Email(){
    return this.LoginForm.get('email');
  }

  get Password(){
    return this.LoginForm.get('password');
  }

  search:Login=new Login();

  constructor(private fb: FormBuilder,private router: Router) {
   }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      // for email validation
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],

      //for password validation
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onLoginClick() : void{
    if (this.LoginForm.invalid) {
      this.LoginForm.markAsTouched();
  }
    else{
      this.LoginForm.markAsTouched();
      this.router.navigate(["/"])
    }
  }

}
