import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginData } from 'src/app/loginData'; 
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { LoginComponent } from '../pages/login/login.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _loginUrl = "http>//localhost:5002/api/login"
  // subs: Subscription = 

  constructor(private http: HttpClient, private router: Router) { }

  // private _updateNav = new Subject<void>();

  
  // public get updateNav() : Subject<void> {
  //   return this._updateNav
  // }
  

  /** no interceptor valid for login (bcoz token is absent in session at first)?? */
      loginUser(userdata:LoginData){   
        const username = userdata.username
        const password = userdata.password
        const token = btoa(`${username}:${password}`); 

        this.http.get<any>('http://localhost:8080/authenticate', { headers: { 'Authorization': 'Basic ' + token } }).subscribe(
  
          result => { 
            sessionStorage.setItem('token', token); 
            sessionStorage.setItem('userInfo', JSON.stringify(result)); 
            
            if (result?.roles?.includes('ADMIN')) { 
              this.router.navigate(['/dashboard/admin']); 
            } else { 
              this.router.navigate(['/dashboard']); 
            } 
          }, 
          err => { 
            alert(err.message); 
          }
  
        );  
      }

      getRoleFromSession(){
        let roles = JSON.parse(sessionStorage.getItem('userInfo')||'{}').roles; 
        // if(!roles){
        //   return 'none'
        // }else{
          return roles
        // }
      }
      logoutUser(){ 
        console.log('logged out');
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        this.router.navigate(['/login'])
      }
  } 
