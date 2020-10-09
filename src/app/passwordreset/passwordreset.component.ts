import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password.service';
import { PasswordValidator } from './password.validation';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css'],
})
export class PasswordresetComponent implements OnInit {
  title = 'Login Page';
  submitted = false;
  oldPassword: string;
  newPassword: string;
  customerId: number;
  data: any;
  get Password() {
    return this.ResetForm.get('password');
  }
  get PasswordNew() {
    return this.ResetForm.get('password1');
  }
  get PasswordConf() {
    return this.ResetForm.get('password2');
  }

  ResetForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private resetPasswordService: ResetPasswordService
  ) {}

  ngOnInit(): void {
    this.ResetForm = this.fb.group(
      {
        //for password validation
        password: ['', [Validators.required, Validators.minLength(8)]],
        password1: ['', [Validators.required, Validators.minLength(8)]],
        password2: ['', Validators.required],
      },
      { validator: PasswordValidator }
    );

    this.customerId = parseInt(sessionStorage.getItem('customerId'));
  }

  onSetClick(): void {
    if (this.ResetForm.valid) {
      this.router.navigate(['/afterReset']);
    } else {

    }
    console.log(this.oldPassword);
    console.log(this.newPassword);
    this.resetPasswordService
      .reset(this.customerId, this.oldPassword, this.newPassword)
      .subscribe((response) => {
        this.data = response;
        console.log(this.data.status);
      });
  }
}
