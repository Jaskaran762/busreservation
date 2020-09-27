import { Component, OnInit } from '@angular/core';
import {ForgotPassword} from './ForgotPassword';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  afterSubmit:boolean = false;
  msg:string="submitted";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  search:ForgotPassword=new ForgotPassword();
  

}
