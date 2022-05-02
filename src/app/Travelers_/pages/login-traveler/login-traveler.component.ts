import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TravelersService } from '../../services/travelers.service';
import { Traveler } from '../../model/traveler';
import { autrequest } from '../../model/autenticate';
//import { AnyMxRecord } from 'dns';

import { LoginTravelerService } from '../../services/login-traveler.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-traveler',
  templateUrl: './login-traveler.component.html',
  styleUrls: ['./login-traveler.component.css']
})
export class LoginTravelerComponent implements OnInit {
  travelerData:Traveler;
  submitted:boolean=false;
  login:autrequest;
  emailPrueb:string='owo';
    
  
  registerForm: FormGroup=this.formBuilder.group({
    email:['',{validators:[Validators.required,Validators.email],updateOn:'change'}],
    password:['',{validators:[Validators.required,Validators.minLength(6)],updateOn:'change'}],
  });

  currentUser:any;


  constructor(private formBuilder:FormBuilder,private travelerService:TravelersService,private loginService:LoginTravelerService,private route:Router ) { 
  this.travelerData={}as Traveler;
  this.currentUser={}as Traveler;
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
  saidSomething(){
    console.log('registrado exitosamente');
  }
  //post user
  postUser(){
    this.travelerData.id=0;
    console.log(this.travelerData)
     this.travelerService.create(this.travelerData).subscribe()
  }



  loginhandler(){
   
    //this.login.password=pass;
    //console.log(this.login);
    this.loginService.post(this.login).subscribe(data => {
      
      //console.log(data)
      this.currentUser = data;
      console.log(this.currentUser.password)
      if (this.currentUser.password==this.login.password) {
       
       //aca se guarda el usuario en el local storage
        localStorage.setItem('user', JSON.stringify(this.currentUser));   



       return this.route.navigateByUrl('/searchEvent'); 
      }
      else {
       return this.route.navigateByUrl('/login-traveler');

      } 
      
    });      
      
  }


}
