import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isLogged
  constructor(private router: Router,private toaster: ToastrService){

  }

  ngDoCheck(){
    this.isLogged = localStorage.getItem('isLogged');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toaster.success('Success','Logged Out Successfully')
  }
}
