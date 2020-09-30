import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css'],
})
export class PasswordresetComponent implements OnInit {
  title = 'Login Page';
  ResetForm: FormGroup;
  submitted = false;

  //for the logged in email, need to compare old password
  //get Email() {

  //}

  //need to compare old password
  get Password() {
    return this.ResetForm.get('password');
  }
  get PasswordNew() {
    return this.ResetForm.get('password1');
  }
  get PasswordConf() {
    return this.ResetForm.get('password2');
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.ResetForm = this.fb.group({
      //for password validation
      password: ['', [Validators.required, Validators.minLength(8)]],

      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSetClick(): void {
    if (this.ResetForm.invalid) {
      this.ResetForm.markAsTouched();
    } else {
      this.ResetForm.markAsTouched();
      this.router.navigate(['/']);
    }
  }
}
