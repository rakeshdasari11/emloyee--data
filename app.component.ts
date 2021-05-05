import { Component } from '@angular/core';
import { CommonService } from './common.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: NgbDateStruct | undefined ;
  title = 'task-angular8';
  allUser: any;
  isEdit=false;
  userObj={
   
    name:'',
  ///  positionlist:'',
  selected:'',
 // model:"{year: '2016', month:'04', day: '11'}",
  model :'{year: 2021, month: 5, day: 7}',
    mobile:'',
    email:'',
    password:'',
    id:''
  }
  regModel: any;
  topics:any=['abc','pqr'];
 
  
constructor(private commonService:CommonService){}

  addUser(formObj: any){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response
    })
  }
  editUser(user:any){
    this.isEdit=true;
    this.userObj=user;
  }

  deleteUser(user: any){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit=!this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    
    })
  }
}
