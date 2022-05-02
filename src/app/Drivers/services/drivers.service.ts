import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Driver } from '../model/driver';
import    {catchError,retry}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DriversServices {
  basePath='http://localhost:3000/drivers'

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`A error has Ocurred:${error.error.message}`)
    }else{
      console.error(`Backend return code ${error.status}, body was:${error.error  }`);
    }
    return throwError('Something  happened with request, please try again later')
  }


  create(item:any):Observable<Driver>{
    return this.http.post<Driver>(this.basePath,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getById(id:any):Observable<Driver>{
    return this.http.get<Driver>(`${this.basePath}/${id},this.httpOptions`).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  getAll():Observable<Driver>{
    return this.http.get<Driver>(this.basePath,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  update(id:any,item:any):Observable<Driver>{
    return this.http.put<Driver>(`${this.basePath}/${id},JSON.stringify(item)`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  delete(id:any){
    return this.http.put<Driver>(`${this.basePath}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}