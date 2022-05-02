import { Component, OnInit } from '@angular/core';
import { DriverRoutesService } from '../../services/driver-routes.service';
import { driverRoute } from '../../model/driverRoutes';
@Component({
  selector: 'app-search-route',
  templateUrl: './search-route.component.html',
  styleUrls: ['./search-route.component.css']
})
export class SearchRouteComponent implements OnInit {
  
  constructor(private driverRouteService:DriverRoutesService) { }
  routeData:any;
  filterPost = '';

  getData(){
    this.driverRouteService.getAll().subscribe(data => {
      this.routeData = data;
      console.log(this.routeData.content)
    });      
}
  posts = [
    {
      "id": 1,
      "starting_point": "San Isidro - Chosica",
      "departure_date": "02/04/2019"
    },
    {
      "id": 2,
      "starting_point": "San Borja - Pachacamac",
      "departure_date": "11/04/2019"
    },
    {
      "id": 3,
      "starting_point": "La Molina - Pachacamac",
      "departure_date": "30/01/2019"
    },
    {
      "id": 4,
      "starting_point": "La Molina - Lunahuana",
      "departure_date": "30/05/2019"
    },
    {
      "id": 5,
      "starting_point": "San Borja - Chosica",
      "departure_date": "30/04/2019"
    }
  ];




  ngOnInit(): void {
    this.getData();
  }

}
