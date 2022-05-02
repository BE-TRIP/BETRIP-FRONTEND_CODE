import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  position={
    lat: -12.0431800,
    lng: -77.0282400
  }
  label={
    color:'blue',
    text:'position'
  }
}
