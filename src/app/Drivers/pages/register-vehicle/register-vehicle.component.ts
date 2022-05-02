import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DriversServices } from '../../services/drivers.service';
import { Driver } from '../../model/driver'


@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  driverData: Driver;
  submitted:boolean=false;
  registerForm: FormGroup=this.formBuilder.group({
    tipe:['',{validators:[Validators.required],updateOn:'change'}],
    model:['',{validators:[Validators.required],updateOn:'change'}],
    brand:['',{validators:[Validators.required],updateOn:'change'}],
    licence_plate:['',{validators:[Validators.required],updateOn:'change'}],
    licence_code:['',{validators:[Validators.required],updateOn:'change'}],
    number_seats:['',{validators:[Validators.required],updateOn:'change'}],
  });
  
  constructor(private formBuilder:FormBuilder,private driverService:DriversServices) { 
    this.driverData={}as Driver;
  }


  ngOnInit(): void {
 
    this.setNumberSeatsValidation();

  }

  get tipe(){return this.registerForm.get('tipe');}
  get model(){return this.registerForm.get('model');}
  get brand(){return this.registerForm.get('brand');}
  get licence_code(){return this.registerForm.get('licence_code');}
  get licence_plate(){return this.registerForm.get('licencce_plate');}
  get number_seats(){return this.registerForm.get('number_seats');}


  setNumberSeatsValidation(){
    const nameControl=this.registerForm.get('number_seats');
    nameControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required])
  };
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


