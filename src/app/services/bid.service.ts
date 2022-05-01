import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { Bid } from '../bid'; 
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class BidService {
  private apiUrl = 'http://localhost:5000/bids'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(
    private http: HttpClient,    
    private msgService: MessageService
    ) { }

  getBids(): Observable<Bid[]>{ 
    return this.http.get<Bid[]>(this.apiUrl) 
  }
  
  getBid(pid: number):Observable<Bid>{ 
    // const url = `${this.apiUrl}/?pid=${pid}`
    const url = `${this.apiUrl}/${pid}`
    return this.http.get<Bid>(url)
    // .pipe(
    //   catchError(this.handleError<Bid>('getBids'))
    // );
  }
  
  updateBid(bid: Bid): Observable<Bid>{
    const url=`${this.apiUrl}/${bid.pid}`
    return this.http.put<Bid>(url, bid, this.httpOptions)
  }

  addBid(bid: Bid): Observable<Bid>{ 
    return this.http.post<Bid>(this.apiUrl, bid, this.httpOptions)
  } 

  deleteBid(pid: number): Observable<Bid>{ 
    const url = `${this.apiUrl}/${pid}`

    return this.http.delete<Bid>(url)
  }

  searchBids(term: string): Observable<Bid[]>{
    if(!term.trim()) return of([])
    return this.http.get<Bid[]>(`${this.apiUrl}/?title=${term}`)
  }

  // getSuggestions(term: string):Observable<Hero[]>{
  //   if(!term.trim()) return
  //   return this.http.get<Hero[]>(`${this.apiUrl}/?name=`)
  // }

  private log(msg: string){
    this.msgService.add(`BidService: ${msg}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
