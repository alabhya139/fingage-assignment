import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  userDetails: any
  url: String
  authToken: String

  constructor(
    private fb: FormBuilder,
    private service: HttpService,
    private router: Router,
    private toasterService: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.service.getAllUser().subscribe(
      data => {
        this.userDetails = data;
      }
    )
  }

  login() {
    let formValue = this.loginForm.value;
    let i = 1;
    console.log(this.userDetails)
    for (let user of this.userDetails) {
      if (user.email === formValue.email) {
        if (user.password === formValue.password) {
          this.toasterService.success('Success', 'Successfully Logged in');
          localStorage.setItem('isLogged', 'true');
          this.router.navigate(['dashboard'])
        }
      } else if (i === this.userDetails.length) {
        this.toasterService.error('Error', 'Wrong Credential')
      } else {
        i++;
      }

    }
  }

}
