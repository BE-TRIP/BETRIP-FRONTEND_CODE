import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Traveler } from '../model/traveler';
import	{catchError,retry}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TravelersService {

  
  basePath='http://localhost:3000/api/v1/travelers'

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
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


  create(item:any):Observable<Traveler>{
    return this.http.post<Traveler>(this.basePath,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getById(id:any):Observable<Traveler>{
    return this.http.get<Traveler>(`${this.basePath}/${id}`,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  getAll():Observable<Traveler>{
    return this.http.get<Traveler>(this.basePath,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  update(id:any,item:any):Observable<Traveler>{
    return this.http.put<Traveler>(`${this.basePath}/${id}`,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  delete(id:any){
    return this.http.put<Traveler>(`${this.basePath}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}