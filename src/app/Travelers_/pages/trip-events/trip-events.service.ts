import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tripEvent } from './trip-events'; //model .ts
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TripEventsService {

  //Events Endpoint
  //basePath ='http://localhost:3000/api/v1/Eventos'
  basePath='https://be-trip-back322.herokuapp.com/api/v1/travel-events?page=0&size=1&sort=string'
  
  httpOptions = {
    
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })




  }

  constructor(private http: HttpClient) { }

  //API Error Handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`)
    } else {
      // Unsuccessful response error code returned from backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  //Create Event
  create(item: any){
    return this.http.post<tripEvent>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Get event by id
  getById(id: any){
    return this.http.get<tripEvent>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Get All
  getAll(){
    return this.http.get<tripEvent>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Update
  update(id: any, item: any){
    return this.http.put<tripEvent>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Delete 
  delete(id: any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
