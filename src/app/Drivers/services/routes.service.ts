import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { tripRoute } from '../model/route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  //Routes Endpoint
  basePath ='http://localhost:3000/api/v1/routes'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
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
create(item: any): Observable<tripRoute>{
  return this.http.post<tripRoute>(this.basePath, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}

//Get event by id
getById(id: any): Observable<tripRoute>{
  return this.http.get<tripRoute>(`${this.basePath}/${id}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}

//Get All
getAll(): Observable<tripRoute>{
  return this.http.get<tripRoute>(this.basePath, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}

//Update
update(id: any, item: any): Observable<tripRoute>{
  return this.http.put<tripRoute>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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

getByDriverId(id: any): Observable<tripRoute>{
  return this.http.get<tripRoute>(`http://localhost:3000/api/v1/drivers/${id}/routes`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}


}
