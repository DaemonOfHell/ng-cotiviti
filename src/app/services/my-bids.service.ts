import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http'; 
import { Observable, Subscription } from 'rxjs';
import { MyBid } from '../mock_data/my-bid';

@Injectable({
  providedIn: 'root'
})
export class MyBidsService {
  
  private apiUrl = 'http://localhost:5001/my-bids'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor( private http: HttpClient) { }

  getMyBids(): Observable<MyBid[]>{ 
    return this.http.get<MyBid[]>(this.apiUrl) 
  }
}
