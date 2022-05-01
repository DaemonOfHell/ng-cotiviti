import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { User } from 'src/app/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  @Output() onUserAdded: EventEmitter<User> = new EventEmitter()

  name!: string
  email!: string
  password!: string

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
    if(!this.email){
      alert("email is empty :(");
      return
    }
    if(!this.password){
      alert("password is empty :(");
      return
    }

    const newUser: User = {
      uid: 1,
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.onUserAdded.emit(newUser)

    //emit event
    this.name = ""
    this.email = ""
    this.password=""
  }
}
