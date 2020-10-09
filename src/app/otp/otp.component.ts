import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password.service';
import { PasswordValidator } from './password.validation';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  customerId: number;
  data: any;
  newPassword: string;

  OtpForm: FormGroup;
  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get PasswordNew() {
    return this.OtpForm.get('password');
  }
  get PasswordConf() {
    return this.OtpForm.get('confirmPassword2');
  }

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerFromEmail'));
    //password validation
    this.OtpForm = this.fb.group(
      {
        //password validation
        password: ['', [Validators.required, Validators.minLength(8)]],

        //confirm password
        confirmPassword: ['', [Validators.required]],
      },
      { validator: PasswordValidator }
    );
  }
  onSubmit(): void {
    //check if form is valid
    if (this.OtpForm.valid) {
      //if from is valid, reset password
      this.resetPasswordService
        .setPassword(this.customerId, this.newPassword)
        .subscribe((response) => {
          this.data = response;
          console.log(this.data.status);
          console.log(this.newPassword);
          //if password was reset, navigate to home page
          if (this.data.status == true) this.router.navigate(['/homepage']);
        });
    } else {
      
    }
  }
}
