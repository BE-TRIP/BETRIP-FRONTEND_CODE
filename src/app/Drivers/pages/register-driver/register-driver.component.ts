import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DriversServices } from '../../services/drivers.service';
import { Driver } from '../../model/driver';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent implements OnInit {
driverData: Driver;
submitted:boolean=false;
registerForm: FormGroup=this.formBuilder.group({
  name:['',{validators:[Validators.required],updateOn:'change'}],
  last_name:['',{validators:[Validators.required],updateOn:'change'}],
  age:['',{validators:[Validators.required],updateOn:'change'}],
  dni:['',{validators:[Validators.required],updateOn:'change'}],
  district:['',{validators:[Validators.required],updateOn:'change'}],
  email:['',{validators:[Validators.required,Validators.email],updateOn:'change'}],
  password:['',{validators:[Validators.required,Validators.minLength(8)],updateOn:'change'}],
});

  constructor(private formBuilder:FormBuilder,private driverService:DriversServices) { 
    this.driverData={}as Driver;
  }

  ngOnInit(): void {
    
    this.setNameValidation(); 
    this.setAgeValidation();
    this.setDNIValidation();
    this.setLastNameValidation(); 
    this.setDistrictValidation();

 
  }

  get name(){return this.registerForm.get('name');}
  get last_name(){return this.registerForm.get('age');}
  get dni(){return this.registerForm.get('dni');}
  get age(){return this.registerForm.get('age');}
  get district(){return this.registerForm.get('district');}
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  
  

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

  setLastNameValidation(){const nameControl=this.registerForm.get('last_name');
  nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required])}; 

 setDistrictValidation(){const nameControl=this.registerForm.get('district');
 nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required])};






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
    this.driverData.id=0;
    console.log(this.driverData)
     this.driverService.create(this.driverData).subscribe()
  }
};


