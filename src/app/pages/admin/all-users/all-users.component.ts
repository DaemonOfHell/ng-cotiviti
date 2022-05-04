import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { UserForm } from 'src/app/user-form';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers:any = []
  showUserForm: boolean = false;
  sub!: Subscription

  constructor(private userService: UserService,private uiService: UiToggleService, private router : Router) {
    this.sub = uiService.onToggle().subscribe(showStatus => this.showUserForm = showStatus)
   }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.userService.getUsers().subscribe(users=>{
      this.allUsers=users
      // console.log(this.allUsers[2]);   s
    });
    
  }

  removeUser(user: any){
    const isAdmin = JSON.parse(sessionStorage.getItem('userInfo')||'{}')?.roles.includes('ADMIN')
    if(user.ROLE=="ADMIN") return  
 
    this.userService.deleteUser(user.USER_ID).subscribe((u)=>{
      //  console.log('deleted user '+u.USERNAME); 
       this.allUsers = []
       this.fetchUsers() 
    })
  }

  toggleForm(){
    this.uiService.toggleOverlay("")
  }

  addUser(user: UserForm){
    // console.log(user);
    this.userService.addUser(user).subscribe(()=>{
      this.allUsers = []
      this.fetchUsers()
    })
  }
}
