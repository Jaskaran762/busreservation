import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from './ForgotPassword';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  afterSubmit: boolean = false;
  msg: string = 'submitted';
  customerId: number;
  data: number;
  otp: number;
  generatedOtp: number;
  email: string;

  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendOtpMail() {
    this.resetPasswordService
      .searchCustomer(this.email)
      .subscribe((response) => {
        this.customerId = response;
        console.log('cust id= ' + this.customerId);
        sessionStorage.setItem('customerFromEmail', String(this.customerId));
        if (isNaN(this.customerId)) {
        
        }
        //if customer id is fetched, generate a OTP for the customer
        else {
          this.resetPasswordService
            .mail(this.customerId)
            .subscribe((response) => (this.generatedOtp = response));
        }
      });
  }

  checkOtp() {
    console.log(this.otp);
    console.log(this.generatedOtp);

    //to check if otp matches
    if (this.otp == this.generatedOtp) {
      //if otp matched

      this.router.navigate(['/otp']);
    } else {
      
    }
  }
}
