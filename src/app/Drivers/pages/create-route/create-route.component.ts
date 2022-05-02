import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
import { tripRoute } from 'src/app/Drivers/model/route';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { MatSnackBar} from '@angular/material/snack-bar';
import { random } from 'lodash';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {

  tripRouteData:tripRoute;
  submitted:boolean=false;
  createTripRouteForm: FormGroup=this.formBuilder.group({
    destiny:['',{validators:[Validators.required],updateOn:'change'}],
    starting_point:['',{validators:[Validators.required],updateOn:'change'}],
    departure_date:['',{validators:[Validators.required],updateOn:'change'}],
    cost:['',{validators:[Validators.required],updateOn:'change'}],
    //driver:['',{validator:[Validators.required],updateOn:'change'}]
  });

  constructor(private formBuilder:FormBuilder, private tripRouteService:RoutesService) { 
    this.tripRouteData={}as tripRoute;
  }
  
  ngOnInit(): void {
    this.setDestinyValidation();
    this.setStartingPointValidation();
    this.setDepartureDateValidation();
    this.setCostValidation();
  }

  get destiny(){return this.createTripRouteForm.get('destiny');}
  get starting_point(){return this.createTripRouteForm.get('starting_point');}
  get departure_date(){return this.createTripRouteForm.get('departure_date');}
  get cost(){return this.createTripRouteForm.get('cost');}
  get driver(){return this.createTripRouteForm.get('driver')}
  setDestinyValidation(){
    const nameControl=this.createTripRouteForm.get('destiny');
    nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required])
  }

  setStartingPointValidation(){
    const nameControl=this.createTripRouteForm.get('starting_point');
    nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required,])
  }

  setDepartureDateValidation(){
    const nameControl=this.createTripRouteForm.get('departure_date');
    nameControl?.setValidators([Validators.required, Validators.maxLength(8)])
  }

  setCostValidation(){
    const nameControl=this.createTripRouteForm.get('cost');
    nameControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required, Validators.maxLength(3)])
  }

  setDriverValidation(){
    const nameControl=this.createTripRouteForm.get('driver');
    nameControl?.setValidators([Validators.required])
  }

  submitForm(){
    console.log()
    this.submitted=true;
  }
  saidSomething(){
    console.log('registrado exitosamente');
  }

  postUser(){
    this.tripRouteData.id=0;
    this.tripRouteData.seating=2;
    this.tripRouteData.departure_time="00:00 pm";
    this.tripRouteData.driver = "Matias Perez";
    console.log(this.tripRouteData)
      this.tripRouteService.create(this.tripRouteData).subscribe()
  }


}
