import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AuthService } from './services/auth.service';
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
 
  // currentRole!:any
   
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit():void{
    // this.authService.updateNav.subscribe(res=>{  
    //   this.NavDisplay()
    // })
    // this.NavDisplay()
  }

  ngDoCheck():void{
    if(this.router.url=='/login'){
      
    }
  }

  // NavDisplay(): void{
    
  //   console.log(roles);
    
  //   if(sessionStorage.getItem('token')){
  //     let roles = this.authService.getRoleFromSession()
  //     this.currentRole = roles[0]
  //     console.log(this.currentRole); 
  //   }else{
  //     this.displayNav=false
  //   }
  // }
  // loggedInAs!:
  // loggedIn =new BehaviorSubject<boolean>(false)
  
  // private userInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
  // isUser:boolean =  (Object.keys(this.userInfo).length!=0)? !this.userInfo.roles.includes('ADMIN'):false
   
  // onLogin():Observable<boolean>{
  //   return this.loggedIn.asObservable()
  // }
}
