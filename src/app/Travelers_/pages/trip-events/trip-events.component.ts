import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TripEventsService } from './trip-events.service';
import { tripEvent } from './trip-events';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import * as _ from 'lodash';
import { MatSort } from '@angular/material/sort';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-trip-events',
  templateUrl: './trip-events.component.html',
  styleUrls: ['./trip-events.component.css']
})
export class TripEventsComponent implements OnInit, AfterViewInit  { 

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','driver','destiny', 'starting_point', 'departure_date', 'cost'];

  @ViewChild( MatPaginator, { static:true })
  paginator!: MatPaginator;

  @ViewChild( MatSort )
  sort!: MatSort; 

  constructor(private eventService: TripEventsService ) { 
    this.dataSource= new MatTableDataSource<any>();
   }

   ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllEvent();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  getAllEvent(){
    this.eventService.getAll().subscribe((response: any)=> {
      this.dataSource.data = response;
      console.log(response.data.content)

    });
  }

  
  
}
