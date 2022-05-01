import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../user'; 
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5002/users'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(   
    private http: HttpClient,    
    // private msgService: MessageService
    ) { }

    getUsers(): Observable<User[]>{ 
      return this.http.get<User[]>(this.apiUrl) 
    }

    getUser(uid: number):Observable<User>{  
      const url = `${this.apiUrl}/${uid}`
      return this.http.get<User>(url) 
    }
    
    updateUser(user: User): Observable<User>{
      const url=`${this.apiUrl}/${user.uid}`
      return this.http.put<User>(url, user, this.httpOptions)
    }
  
    addUser(user: User): Observable<User>{ 
      return this.http.post<User>(this.apiUrl, user, this.httpOptions)
    } 

    deleteUser(uid: number):Observable<User>{
      const url = `${this.apiUrl}/${uid}` 
      return this.http.delete<User>(url)
    }

    searchUsersByName(term: string): Observable<User[]>{
      if(!term.trim()) return of([])
      return this.http.get<User[]>(`${this.apiUrl}/?name=${term}`)
    }
}
