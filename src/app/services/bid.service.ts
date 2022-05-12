import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { Bid } from '../bid';  
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class BidService {
  private apiUrl = 'http://localhost:8080'
  private admin = 'admin'
  private allBids = 'findAllBids'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(
    private http: HttpClient,     
    ) { }

  getBids(): Observable<Bid[]>{ 
    const token = sessionStorage.getItem('token')
    return this.http.get<Bid[]>(`${this.apiUrl}/${this.admin}/${this.allBids}`) 
  }
  
  // getBid(pid: number):Observable<Bid>{  
  //   const url = `${this.apiUrl}/${pid}`
  //   return this.http.get<Bid>(url) 
  // }
  
  // updateBid(bid: Bid): Observable<Bid>{ 
  //   const url=`${this.apiUrl}/${bid.id}`
  //   return this.http.put<Bid>(url, bid, this.httpOptions)
  // }

  // addBid(bid: Bid): Observable<Bid>{ 
  //   return this.http.post<Bid>(this.apiUrl, bid, this.httpOptions)
  // } 

  deleteBid(pid: number): Observable<Bid>{ 
    const url = `${this.apiUrl}/${pid}`

    return this.http.delete<Bid>(url)
  }

  // searchBids(term: string): Observable<Bid[]>{
  //   if(!term.trim()) return of([])
  //   return this.http.get<Bid[]>(`${this.apiUrl}/?title=${term}`)
  // }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
