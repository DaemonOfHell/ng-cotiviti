import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginData } from 'src/app/loginData'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http>//localhost:5002/api/login"

  constructor(private http: HttpClient) { }

  loginUser(userdata:LoginData){
    return this.http.post<LoginData>(this._loginUrl, userdata)
  }
}
