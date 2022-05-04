import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginData } from 'src/app/loginData'; 
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

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

      // logoutUser(){ 
      //   console.log('logged out');
      //   sessionStorage.removeItem('token')
      //   sessionStorage.removeItem('userInfo')
      //   this.router.navigate(['/login'])
      // }
  } 
