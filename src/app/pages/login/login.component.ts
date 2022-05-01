import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/loginData'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData: LoginData ={
    email:'',
    password:''
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    // this._auth.loginUser(this.loginUserData)
    //   .subscribe(loginCredentials=>this.loginUserData=loginCredentials)
    console.log(this.loginUserData);
    if(this.loginUserData.email=="a@a.com" 
      && this.loginUserData.password=="a"){
        
      }
  }
}
