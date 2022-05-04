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
    username:'',
    password:''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){ 
   
    if(!this.loginUserData.username){
      alert("username is empty")
      return
    }
    if(!this.loginUserData.password || this.loginUserData.password.length<1){
      alert("password is empty")
      return
    }
    //  console.log(this.loginUserData); 
    this.authService.loginUser(this.loginUserData)
  }
}
