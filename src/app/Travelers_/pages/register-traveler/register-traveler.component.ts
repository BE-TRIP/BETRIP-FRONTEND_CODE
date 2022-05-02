import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TravelersService } from '../../services/travelers.service';
import { Traveler } from '../../model/traveler';
@Component({
  selector: 'app-register-traveler',
  templateUrl: './register-traveler.component.html',
  styleUrls: ['./register-traveler.component.css']
})
export class RegisterTravelerComponent implements OnInit {
  travelerData:Traveler;
  submitted:boolean=false;
  registerForm: FormGroup=this.formBuilder.group({
    name:['',{validators:[Validators.required],updateOn:'change'}],
    age:['',{validators:[Validators.required],updateOn:'change'}],
    dni:['',{validators:[Validators.required],updateOn:'change'}],
    email:['',{validators:[Validators.required,Validators.email],updateOn:'change'}],
    password:['',{validators:[Validators.required,Validators.minLength(6)],updateOn:'change'}],
    phone:['',{update:"change"}],
    
  });

  constructor(private formBuilder:FormBuilder,private travelerService:TravelersService) {
    this.travelerData={}as Traveler;
   }

  ngOnInit(): void {
    this.setPhoneValidation();
    this.setNameValidation(); 
    this.setAgeValidation();
    this.setDNIValidation();

  }

  get name(){return this.registerForm.get('name');}
  get age(){return this.registerForm.get('age');}
  get dni(){return this.registerForm.get('dni');}
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  get phone(){return this.registerForm.get('phone');}
 

  setPhoneValidation(){
      const phoneControl=this.registerForm.get('phone');
      //defaultvalidations
      phoneControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required]);

      //validations based  on Roles
     
  };
  setNameValidation(){
    const nameControl=this.registerForm.get('name');
    nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required])
  };
  setAgeValidation(){
    const nameControl=this.registerForm.get('age');
    nameControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required])
  };
  setDNIValidation(){
    const nameControl=this.registerForm.get('dni');
    nameControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required])
  }
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

}
