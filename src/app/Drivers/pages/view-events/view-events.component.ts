import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { TravelersService } from '../../services/travelers.service';
import { Traveler } from '../../model/traveler';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})

export class ViewEventsComponent implements OnInit {

  
  constructor(private eventosService:EventsService,private travelerService:TravelersService) { 
    
  }
  

  eventoData:any;
  travelerName:any;
  miarray: number[] = [1,2,3,4,5];
  travelerData:Array<Traveler>=[];

  ngOnInit(): void {
    
    this.getEvents();
    this.getTravelers();
  }
 
  getEvents(){
        this.eventosService.getAll().subscribe(data => {
          this.eventoData = data;
          console.log(this.eventoData.content);
        });      
  };
  getTravelers(){
    console.log(this.eventoData) 
  }

  getNameOfTraveler(ide:number){

    let traName='';
    this.travelerService.getById(ide).subscribe((data:any)=> 
    {
      this.travelerData.push(data)
      console.log(this.travelerData);
    });
    
  }
  postulate(id:number,data:any){
    /*if(data.driver===-1){
      data.driver=1;
      this.eventosService.update(id,data).subscribe();
      console.log(data);
    }else{
      console.log('negative')
    }*/
    data.driver=1;
    this.eventosService.update(id,data).subscribe();
    console.log(data);
  }
  trackByItems(index:number,item:any):number{return item.id};
}
