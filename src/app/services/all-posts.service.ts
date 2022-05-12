import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPost } from '../mock_data/get-post';
// import { Post } from '../mock_data/post';
import { PostBid } from '../mock_data/post-bid';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {

  // my-posts
  private allPosts = "showAllPostedBids"
  private apiUrl = 'http://localhost:8080'
  private postBid = "postBid"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor( private http: HttpClient) { }

  getAllPosts(): Observable<GetPost[]>{ 
    const token = sessionStorage.getItem('token')
    return this.http.get<GetPost[]>(this.apiUrl+"/"+this.allPosts) 
  }
  
 createNewPost(newPost: PostBid):Observable<PostBid>{
  //  console.log(newPost);
  //  return
  const token = sessionStorage.getItem('token')
  return this.http.post<PostBid>(this.apiUrl+"/"+this.postBid,newPost) 
 }
}
