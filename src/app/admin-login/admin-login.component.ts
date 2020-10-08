import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service';
import { AdminLogin } from './login';
import { AdminStatus } from './status';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  title = "Admin Login Page";
  AdminLoginForm : FormGroup;

  login : AdminLogin = new AdminLogin();
  adminStatus : AdminStatus = new AdminStatus();
  message : String;

  constructor(private adminLoginService : AdminLoginService,
    private fb: FormBuilder, private router: Router ) { }

  get Email(){
    return this.AdminLoginForm.get('username');
  }
  get Password(){
    return this.AdminLoginForm.get('password');
  }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      // for email validation
      username: ['', [Validators.required, Validators.minLength(6), Validators.email]],

      //for password validation
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onLoginClick(){
    //console.log(this.login)
    this.adminLoginService.onLogin(this.login).subscribe(data=>{
      alert(data.statusMessage);
      if(data.status == true){
        sessionStorage.setItem( 'customerId', String(data.customerId));
        this.router.navigate(['/adminHome']);
      }
      else{
        this.message = data.statusMessage;
        alert(this.message);
      }
    })
  }

}

