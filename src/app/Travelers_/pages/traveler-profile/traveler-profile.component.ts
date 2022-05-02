import { Component, OnInit } from '@angular/core';
import { TravelersService } from '../../services/travelers.service';

@Component({
  selector: 'app-traveler-profile',
  templateUrl: './traveler-profile.component.html',
  styleUrls: ['./traveler-profile.component.css']
})
export class TravelerProfileComponent implements OnInit {

  name= 'Diego Osorio';
  pfp= "https://image.freepik.com/foto-gratis/primer-plano-hombre-caucasico-impresionado-diciendo-wow-mirando-izquierda-asombrado-revisando-trato-promocion-fondo-blanco-copia-espacio_1258-77230.jpg";
  age= 12;
  dni= "82904012";
  email= "qwoidqoh@as";
  password= "21212112";
  phoneNumber= "0991144192";
  id= 1;


  constructor(private travelersService:TravelersService) { }
  


  travelersData:any;

  ngOnInit(): void {

    this.getEvents();
  }

  getEvents(){
    this.travelersService.getAll().subscribe(data => {
      this.travelersData = data;
      console.log(this.travelersData);
  
    });      
  }  

  

  
}



