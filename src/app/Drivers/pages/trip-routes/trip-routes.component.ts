import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RoutesService } from 'src/app/Drivers/services/routes.service';
import { tripRoute } from 'src/app/Drivers/model/route';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import * as _ from 'lodash';
import { MatSort } from '@angular/material/sort';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-trip-routes',
  templateUrl: './trip-routes.component.html',
  styleUrls: ['./trip-routes.component.css']
})
export class TripRoutesComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['destiny', 'starting_point', 'departure_date', 'cost', 'seating', 'drivers', 'actions'];

  @ViewChild( MatPaginator, { static:true })
  paginator!: MatPaginator;

  @ViewChild( MatSort )
  sort!: MatSort; 

  constructor(private routeService: RoutesService) {
    this.dataSource=new MatTableDataSource<any>();
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllRoute();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  getAllRoute(){
    this.routeService.getAll().subscribe((response: any)=> {
      this.dataSource.data = response;
    });
  }

    deleteItem(id: number){
    this.routeService.delete(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((o: tripRoute)=>{
        return o.id!==id ? o: false;
      });
    });
    console.log(this.dataSource.data);
  }

}
