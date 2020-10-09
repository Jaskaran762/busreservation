import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Login } from './login';
import { LoginStatus } from './loginStatus';
import { LoginService } from '../Login.service';

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

  login : Login=new Login();
  loginStatus : LoginStatus = new LoginStatus();
  message : string;

  constructor(private loginService : LoginService, 
    private fb: FormBuilder,private router: Router) {
   }

  get Email(){
    return this.LoginForm.get('email');
  }
  get Password(){
    return this.LoginForm.get('password');
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      // for email validation
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],

      //for password validation
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onLoginClick(){
      //console.log(this.login)
      this.loginService.onLogin(this.login).subscribe(data=>{
        //console.log(data);
        if(data.status == true){
          sessionStorage.setItem( 'customerId', String(data.customerId));
          this.router.navigate(['/dashboard']);
        }
        else{
          this.message = data.statusMessage;
      
        }
      })
    }
}
