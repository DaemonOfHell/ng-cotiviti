import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BidApproval } from '../mock_data/bid-approval';
import { MyPostWithOffers } from '../mock_data/get-my-post'; 

@Injectable({
  providedIn: 'root'
})
export class MyPostsService {
  private apiUrl = 'http://localhost:8080'
  private allBids = 'showAllPostedBids'
  private offers = 'offerInMyPosts'
  private updateStatus = 'postBid'
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 
    
  constructor( private http: HttpClient) { }
    
    getMyPosts(): Observable<MyPostWithOffers[]>{ 
      let token = sessionStorage.getItem('token')
      let myId = JSON.parse(sessionStorage.getItem('userInfo')||'{}').userId
      console.log(myId);
      
      return this.http.get<MyPostWithOffers[]>(`${this.apiUrl}/${this.offers}/${myId}`) 
    }

    acceptAndUpdate(bid:BidApproval): Observable<BidApproval>{
      const token = sessionStorage.getItem('token')
      return this.http.post<BidApproval>(this.apiUrl+"/"+this.updateStatus,bid) 
    }
 
}
  
  
 



  

 
