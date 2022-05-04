import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BidApproval } from '../mock_data/bid-approval';
import { MyPostWithOffers } from '../mock_data/get-my-post';
import { Post } from '../mock_data/post';

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
  
    // getAllPosts(): Observable<Post[]>{ 
    //   return this.http.get<Post[]>(`${this.apiUrl}/${this.allBids}`) 
    // }

    getMyPosts(): Observable<MyPostWithOffers[]>{ 
      let token = sessionStorage.getItem('token')
      let myId = JSON.parse(sessionStorage.getItem('userInfo')||'{}').userId
      return this.http.get<MyPostWithOffers[]>(`${this.apiUrl}/${this.offers}/${myId}`,{ headers: { 'Authorization': 'Basic ' + token } }) 
    }

    acceptAndUpdate(bid:BidApproval): Observable<BidApproval>{
      const token = sessionStorage.getItem('token')
      return this.http.post<BidApproval>(this.apiUrl+"/"+this.updateStatus,bid, { headers: { 'Authorization': 'Basic ' + token } }) 
    }

    
}
  
  
 



  

 
