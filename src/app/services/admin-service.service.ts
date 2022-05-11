import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPost } from '../mock_data/get-post';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private base_api_url = 'http://localhost:8080/admin/'
  private postsExt = 'totalPostedBids'
  private bidsExt = 'totalOfferBids'
  private usersExt = 'totalUsers'
  // private allUsersExt = 'showAllUsers'
  private allPostsExt = 'showAllPostedBids'

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

  // getAllUsers():Observable<User[]>{
  //   return this.http.get<User[]>(this.base_api_url+this.allUsersExt, { headers: { 'Authorization': 'Basic ' + this.token }})
  // }

  getAllPosts():Observable<GetPost[]>{
    return this.http.get<GetPost[]>('http://localhost:8080/'+this.allPostsExt, { headers: { 'Authorization': 'Basic ' + this.token }})
  }
}
