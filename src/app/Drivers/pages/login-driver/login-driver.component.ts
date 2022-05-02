import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
//import { TravelersService } from '../../services/travelers.service';
import { Driver } from '../../model/driver';
import { autrequest } from 'src/app/Travelers_/model/autenticate';
//import { AnyMxRecord } from 'dns';

import { LoginDriverService } from '../../services/login-driver.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.component.html',
  styleUrls: ['./login-driver.component.css']
})
export class LoginDriverComponent implements OnInit {
  travelerData:Driver;
  submitted:boolean=false;
  login:autrequest;
  emailPrueb:string='owo';
    
  
  registerForm: FormGroup=this.formBuilder.group({
    email:['',{validators:[Validators.required,Validators.email],updateOn:'change'}],
    password:['',{validators:[Validators.required,Validators.minLength(6)],updateOn:'change'}],
  });

  currentUser:any;


  constructor(private formBuilder:FormBuilder,private loginService:LoginDriverService,private route:Router ) { 
  this.travelerData={}as Driver;
  this.currentUser={}as Driver;
  this.login={}as autrequest;
    

}
  ngOnInit(): void {
  }
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  
  submitForm(){
      console.log()
      console.log('asasa')
      this.submitted=true;

  }

  //post user




  loginhandler(){
   
    //this.login.password=pass;
    //console.log(this.login);
    this.loginService.post(this.login).subscribe(data => {


    


      //console.log(data)
      this.currentUser = data;
      console.log(this.currentUser.password)
      if (this.currentUser.password==this.login.password) {

        localStorage.setItem('user', JSON.stringify(this.currentUser));   
       return this.route.navigateByUrl('/searchEvent');
      }
      else {
       return this.route.navigateByUrl('/login-driver');

      } 
      
    });      
      
  }


}
