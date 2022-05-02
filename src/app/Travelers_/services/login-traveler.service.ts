import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Traveler } from '../model/traveler';
import	{catchError,retry}from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LoginTravelerService {

  
  basePath='https://be-trip-back322.herokuapp.com/api/v1/travelers/auth/log-in'

  httpOptions={
       
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })

  }
  constructor(private http:HttpClient) { }

  //error handler

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`A error has Ocurred:${error.error.message}`)
    }else{
      console.error(`Backend return code ${error.status}, body was:${error.error  }`);
    }
    return throwError('Something  happened with request, please try again later')
  }

  post(data:any):Observable<Traveler>{
    return this.http.post<Traveler>(`${this.basePath}`,JSON.stringify(data),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}