import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { User } from 'src/app/user';
import { Subscription } from 'rxjs';
import { UserForm } from 'src/app/user-form';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  @Output() onUserAdded: EventEmitter<UserForm> = new EventEmitter()
 
  name!: string
  password!: string
  role!: string

  showAddUser: boolean = false
  sub!: Subscription

  constructor(private uiService: UiToggleService) { 
    this.sub = uiService.onToggle().subscribe(showStatus=> this.showAddUser = showStatus)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("name is empty :(");
      return
    }
    if(!this.password){
      alert("password is empty :(");
      return
    }
    if(!this.password){
      alert("password is empty :(");
      return
    }

    const newUser: UserForm = { 
      username: this.name,
      password: this.password,  
      role:new Array({role:this.role})
    }

    this.onUserAdded.emit(newUser)
    console.log(newUser);
    

    //emit event
    this.name = ""
    this.password = ""
    this.password=""
  }
}
