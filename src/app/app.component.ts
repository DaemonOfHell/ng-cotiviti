import { Component } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   
  title = 'BiddingApp';  
  // loggedInAs!:
  // loggedIn =new BehaviorSubject<boolean>(false)
  
  // private userInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
  // isUser:boolean =  (Object.keys(this.userInfo).length!=0)? !this.userInfo.roles.includes('ADMIN'):false
   
  // onLogin():Observable<boolean>{
  //   return this.loggedIn.asObservable()
  // }
}
