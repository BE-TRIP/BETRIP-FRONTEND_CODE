import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';
import { Eventos } from '../../model/eventos';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']


})
export class KnowMoreComponent implements OnInit {
  eventoData:Array<Eventos>=[];
  eventotoData:Array<string>=[];



  submitted:boolean=false;


  constructor(private eventosService:EventosService,private ruta:ActivatedRoute) {
   this.ruta.params.subscribe(params=>{
        console.log(params['id']);
        this. getByIdEvent(params['id']);
   });
   }
  ngOnInit(): void {
    //this. getByIdEvent(4);
    console.log(this.eventoData);
    //console.log(this.pruebita);
  }
  
  getByIdEvent(ide:number){
    
    this.eventosService.getById(ide).subscribe((data:any)=> 
    {
      this.eventoData.push(data);
      console.log(data)
    });
  }

  getevent(){
// this.eventoData.push()
    this.eventosService.getAll().subscribe((data:any)=> this.eventoData.push(data));
    //this.eventosService.getAll().subscribe((response:any)=>{ this.eventoData.data.push({...response});}
   // this.eventosService.getAll().subscribe((data:any)=> this.eventoData.push(data));
  
  }

  saidSomething(){
  console.log('Impresion');
  }


}