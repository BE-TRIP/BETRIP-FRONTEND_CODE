import { Component, OnInit } from '@angular/core';

import { tripRoute } from '../../model/route';

import { RoutesService } from '../../services/routes.service';


@Component({

  selector: 'app-show-my-routes',
  templateUrl: './show-my-routes.component.html',
  styleUrls: ['./show-my-routes.component.css']
})
export class ShowMyRoutesComponent implements OnInit {

  routeData:any;
  spectRouteData:Array<any>=[];;

  constructor(private routesService:RoutesService) { }

  ngOnInit(): void {
    this.getByDriverIdRoute(1);
    this.getRoutes();
    console.log(this.routeData);
    console.log(this.spectRouteData);
   // console.log(this.pruebita);
  }
  submitted:boolean=false;


  getByDriverIdRoute(ide:number){
    
    this.routesService.getByDriverId(ide).subscribe((data:any)=> 
    {
      this.spectRouteData.push(data);
      console.log(data)
    });
    
  }
 
  getRoutes(){

    this.routesService.getAll().subscribe(data => {
      this.routeData = data;
      console.log(this.routeData)
    }); 

// this.eventoData.push()
    this.routesService.getAll().subscribe((data:any)=> this.routeData.push(data));
    //this.eventosService.getAll().subscribe((response:any)=>{ this.eventoData.data.push({...response});}
   // this.eventosService.getAll().subscribe((data:any)=> this.eventoData.push(data));
   
  }

  saidSomething(){
  console.log('Impresion');
  }








}
