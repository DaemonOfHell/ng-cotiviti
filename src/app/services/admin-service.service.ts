import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private base_api_url = 'http://localhost:8080/admin/'
  private postsExt = 'totalPostedBids'
  private bidsExt = 'totalOfferBids'
  private usersExt = 'totalUsers'
  private allUsersExt = 'showAllUsers'

  private token = sessionStorage.getItem('token');  
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 
 
  constructor(private http: HttpClient) { }

  getTotalUsers():Observable<number>{
    return this.http.get<number>(this.base_api_url+this.usersExt, { headers: { 'Authorization': 'Basic ' + this.token } }) 
  }
  getTotalBids():Observable<number>{
    return this.http.get<number>(this.base_api_url+this.bidsExt, { headers: { 'Authorization': 'Basic ' + this.token } }) 
  }
  getTotalPosts():Observable<number>{
    return this.http.get<number>(this.base_api_url+this.postsExt, { headers: { 'Authorization': 'Basic ' + this.token } }) 
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.base_api_url+this.allUsersExt, { headers: { 'Authorization': 'Basic ' + this.token }})
  }
}
