import { Component, OnInit } from '@angular/core';
import { TripEventsService } from 'src/app/Travelers_/pages/trip-events/trip-events.service';
import { tripEvent } from '../trip-events/trip-events';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { MatSnackBar} from '@angular/material/snack-bar';
import { random } from 'lodash';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  drivers: any[] = ['Marlon Delgado','Kevin Olarte', 'Carlos Morote', 'Edwin Samaniego','Mariano Guzmán' ]

  tripEventData:tripEvent;
  submitted:boolean=false;
  createTripEventForm: FormGroup=this.formBuilder.group({
    destiny:['',{validators:[Validators.required],updateOn:'change'}],
    starting_point:['',{validators:[Validators.required],updateOn:'change'}],
    departure_date:['',{validators:[Validators.required],updateOn:'change'}],
    cost:['',{validators:[Validators.required],updateOn:'change'}],
    //driver:['',{validator:[Validators.required],updateOn:'change'}]
  });

  constructor(private formBuilder:FormBuilder, private tripEventService:TripEventsService ) { 
    this.tripEventData={}as tripEvent;
  }

  ngOnInit(): void {
    this.setDestinyValidation();
    this.setStartingPointValidation();
    this.setDepartureDateValidation();
    this.setCostValidation();
   // this.setDriverValidation();
  }
  
  
  get destiny(){return this.createTripEventForm.get('destiny');}
  get starting_point(){return this.createTripEventForm.get('starting_point');}
  get departure_date(){return this.createTripEventForm.get('departure_date');}
  get cost(){return this.createTripEventForm.get('cost');}
  get driver(){return this.createTripEventForm.get('driver')}

  setDestinyValidation(){
    const nameControl=this.createTripEventForm.get('destiny');
    nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required])
  }

  setStartingPointValidation(){
    const nameControl=this.createTripEventForm.get('starting_point');
    nameControl?.setValidators([Validators.pattern('[a-zA-Z ]*$'),Validators.required,])
  }

  setDepartureDateValidation(){
    const nameControl=this.createTripEventForm.get('departure_date');
    nameControl?.setValidators([Validators.required])
  }

  setCostValidation(){
    const nameControl=this.createTripEventForm.get('cost');
    nameControl?.setValidators([Validators.pattern('^[0-9]*$'),Validators.required, Validators.maxLength(3)])
  }

  setDriverValidation(){
    const nameControl=this.createTripEventForm.get('driver');
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
    this.tripEventData.id=0;
    this.tripEventData.seating=2;
    this.tripEventData.destinyUrl="#";
    this.tripEventData.departure_time="00:00 pm";
    this.tripEventData.type="Camioneta";
    this.tripEventData.plate="12YPW";
    this.tripEventData.destinyUrl="#";
    this.tripEventData.driver = "Matias Perez";
    console.log(this.tripEventData)
      this.tripEventService.create(this.tripEventData).subscribe()
  }

}
