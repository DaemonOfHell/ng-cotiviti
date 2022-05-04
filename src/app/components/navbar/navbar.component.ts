import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Input() loggedIn?:boolean
  // @Input() isUser?:boolean
  loggedIn!:boolean
  isUser!:boolean
  userInfo={}
  @Input() title!:string
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('token')!=null
    const userInfoAsString = sessionStorage.getItem('userInfo') || '{}';
    const userInfo = JSON.parse(userInfoAsString); 
    this.isUser = !(userInfo?.roles?.includes('ADMIN'))  
  }

  logOut():void{
    console.log('logged out');
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
    console.log("token in ss: "+sessionStorage.getItem('token'));
    console.log("userInfo in ss: "+sessionStorage.getItem('userInfo'));
    
    this.router.navigate(['/login'])
  }

  // logoutUser(){ 
  //   console.log('logged out');
  //   sessionStorage.removeItem('token')
  //   sessionStorage.removeItem('userInfo')
  //   this.router.navigate(['/login'])
  // }

}
