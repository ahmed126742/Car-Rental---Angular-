import { UserProfileService } from './../services/user-profileService/user-profile.service';
import { TryServiceService } from './../services/try-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../services/registerService/register.service';
import { LoginService } from '../services/loginService/login.service';
import { PostCarService } from '../services/post-carService/post-car.service';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  registerForm:FormGroup;
  // carType: any=[];
  userName:string;
  constructor(
    private service:TryServiceService,
     private subject: RegisterService,
      private subject1: LoginService,
      private subject2: PostCarService,
      private TryService: TryServiceService,
      private subjectUserProfile:UserProfileService
      ) { 
    
  }


  Logged(){
    if(!localStorage.getItem("token")){
      // console.log("true");
      return true;
    }
    else {
      // console.log("false");
      
      return false;}

  }
  ngOnInit() {
    // this.service.getVehicleType().subscribe(Response=>{
    //   this.carType = Response;
    //   console.log(Response);
    // })
    this.registerForm = new FormGroup({
      Keyword: new FormControl()
   });

   this.getUserName();
  // }else{
  // this.subject1.getSubject1().next(true);
  // }
  }

  ngOnChanges(){
   this.getUserName();
  }

  // carTypeChange($event){
  //   console.log($event);

    
  showRegister(){
    this.subject.getSubject().next(true);
  }

  showLogin(){
    console.log(this.userName);
    
    this.subject1.getSubject1().next(true);
    this.getUserName();

    // this.userName = this.getUserData().userName;
  }
  showPostCar(){
    if(localStorage.getItem('token')){
      this.subject2.getSubject2().next(true);
    }else{
    this.subject1.getSubject1().next(true);
    }
  }
  showLogout(){
    // this.token = null;
    localStorage.removeItem('token');
    localStorage.clear();
  }


  getUserData(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }

  getUserName(){
    if(localStorage.getItem('token')){
      this.userName = this.getUserData().userName;}
  }

  showUserProfile(){
    this.subjectUserProfile.getSubjectUserProfile().next(true);
  }


}


