import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Input() loggedIn?:boolean
  // @Input() isUser?:boolean
  loggedIn:boolean =false
  isUser:boolean=false

  // displayNav = false;
  // displayMenu= false;
  // LoginStatus$= new BehaviorSubject<boolean>(false)
  // Username$! : Observable<string>

  userInfo={}
  @Input() title!:string
  // @Input() currentRole!:string
  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('token')!=null
    const userInfoAsString = sessionStorage.getItem('userInfo') || '{}';
    const userInfo = JSON.parse(userInfoAsString); 
    this.isUser = !(userInfo?.roles?.includes('ADMIN'))  
    // if(this.loggedIn)
    //   this.isUser = this.currentRole=='USER'   
    // else{
    //   this.loggedIn=false
    // }
  }

  logOut():void{
    this.authService.logoutUser()
  }

  // logoutUser(){ 
  //   console.log('logged out');
  //   sessionStorage.removeItem('token')
  //   sessionStorage.removeItem('userInfo')
  //   this.router.navigate(['/login'])
  // }

}
