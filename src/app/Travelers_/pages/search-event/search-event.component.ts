import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Eventos } from '../../model/eventos';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent implements OnInit {

  pruebita:Array<string>=['tuki','owo','hshdshd'];

  guardado:any; 
  constructor(private eventosService:EventosService) { }

  eventoData:any;
  ngOnInit(): void {
    
    this.getEvents();
    
  }
 
  getEvents(){
      // aca comprobamos que el usuario está guardado en el local storage
        this.guardado= localStorage.getItem('user');
        console.log(this.guardado)

        this.eventosService.getAll().subscribe(data => {
          this.eventoData = data;
          console.log(this.eventoData.content)
        });   
        
        
  }
  

}
