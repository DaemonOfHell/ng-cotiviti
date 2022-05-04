import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../user'; 
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../user-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiUrl = 'http://localhost:5002/users'
  private apiUrl = 'http://localhost:8080'
  private admin ='admin'
  private all = 'showAllUsers'
  private deleteOne = 'delete-user'
  private saveOne = 'saveUser'

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
      const token = sessionStorage.getItem('token')
      return this.http.get<User[]>(`${this.apiUrl}/${this.admin}/${this.all}`,{ headers: { 'Authorization': 'Basic ' + token } }) 
    }

    getUser(uid: number):Observable<User>{  
      const url = `${this.apiUrl}/${uid}`
      return this.http.get<User>(url) 
    }
    
    updateUser(user: UserForm): Observable<UserForm>{
      const userId:string = JSON.parse(sessionStorage.getItem('userInfo')||'{}')?.userId
      const url= this.apiUrl+ userId
      return this.http.put<UserForm>(url, user, this.httpOptions)
    }
  
    addUser(user: UserForm): Observable<UserForm>{ 
 
      
      // const headers = new HttpHeaders({
      //   'Content-Type':'application/json',
      //   'Authorization':'Basic UHJhc2hhbnQ6cGFzcw=='
      // })
      // const token = sessionStorage.getItem('token')
      console.log(user);
      
      // return this.http.post<UserForm>(`${this.apiUrl}/${this.saveOne}`, user, { headers: { 'Authorization': 'Basic ' + token } })
      return this.http.post<UserForm>(`${this.apiUrl}/${this.saveOne}`, user, this.httpOptions)
    } 

    deleteUser(uid: number):Observable<User>{
      const url = `${this.apiUrl}/${this.deleteOne}/${uid}` 
      const token = sessionStorage.getItem('token')
      return this.http.delete<User>(url,{ headers: { 'Authorization': 'Basic ' + token } })
    }

    searchUsersByName(term: string): Observable<User[]>{
      if(!term.trim()) return of([])
      return this.http.get<User[]>(`${this.apiUrl}/?name=${term}`)
    }
}
