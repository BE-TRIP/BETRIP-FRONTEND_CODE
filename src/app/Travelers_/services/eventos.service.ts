import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Eventos } from '../model/eventos';
import	{catchError,retry}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  //basePath='http://localhost:3000/api/v1/Eventos'
  basePath='https://be-trip-back322.herokuapp.com/api/v1/travel-events?page=0&size=1&sort=string'
  basePathito='https://be-trip-back322.herokuapp.com/api/v1/travel-events'
  
  httpOptions={
    
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })
  
    
  }
  constructor(private http:HttpClient) {
    

   }

  //error handler

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`A error has Ocurred:${error.error.message}`)
    }else{
      console.error(`Backend return code ${error.status}, body was:${error.error  }`);
    }
    return throwError('Something  happened with request, please try again later')
  }


  create(item:any):Observable<Eventos>{
    return this.http.post<Eventos>(this.basePath,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  

  getById(id:any){
      return this.http.get<Eventos>(`${this.basePathito}/${id}`,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
      );

      
  }
  getAll(){
    return this.http.get<Eventos>(this.basePath,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  update(id:any,item:any):Observable<Eventos>{
    return this.http.put<Eventos>(`${this.basePath}/${id}`,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  delete(id:any){
    return this.http.put<Eventos>(`${this.basePath}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}