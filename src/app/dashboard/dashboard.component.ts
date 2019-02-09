import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: any;
  addUser: FormGroup
  value = false;
  isEditable = false;
  userInfo
  index
  showuser = false;

  constructor(private service:HttpService,private fb: FormBuilder) { }

  ngOnInit() {
    
    this.addUser = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone_no:['',Validators.required]
    })
    this.service.getAllUser().subscribe(
      data => {
        this.userDetails = data;
      }
    )
  }

  toggle(){
    this.value = true;
  }

  showUser(index){
    this.showuser = true
    this.userInfo = this.userDetails[index];
  }

  adduser(){
    let data = this.addUser.value;
    data.created_at=Date.now();
    console.log(data)
    this.userDetails.push(data);
    this.value = false;
    this.addUser.reset()
    this.isEditable = false;
  }

  editIt(){
    let data = this.addUser.value;
    data.created_at=Date.now();
    this.userDetails[this.index] = data;
    this.value = false;
    this.addUser.reset();
    this.isEditable = false;
  }

  deleteUser(index){
    this.userDetails.splice(index,1);
  }

  editUser(index){
    this.index = index;
    let user = this.userDetails[index]
    this.addUser = this.fb.group({
      username:[user.username,Validators.required],
      password:[user.password,Validators.required],
      email:[user.email,Validators.required],
      phone_no:[user.phone_no,Validators.required]
    })
    this.value = true;
    this.isEditable = true;
  }

  back(){
    this.value = false;
    this.addUser.reset();
    this.isEditable = false;
    this.showuser = false;
  }

}
