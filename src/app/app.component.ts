import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor( private router: Router){
  
}
   location!: any
 
  loggedIn:boolean = true
  title = 'BiddingApp';

  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
  getPath() {
    return this.location.path();  
  }
  
  logOut(){
    this.loggedIn = false;
    console.log('logged out');
    
    this.router.navigate(['/login'])
  }
}
