import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: User[] = []
  showUserForm: boolean = false;
  sub!: Subscription

  constructor(private userService: UserService,private uiService: UiToggleService) {
    this.sub = uiService.onToggle().subscribe(showStatus => this.showUserForm = showStatus)
   }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.userService.getUsers().subscribe(users=>this.allUsers=users)
  }

  removeUser(user: User){
    
  }

  toggleForm(){
    this.uiService.toggleOverlay("")
  }

  addUser(user: User){
    console.log(user);
    this.userService.addUser(user).subscribe(newUser=>this.allUsers.push(newUser))
  }
}
