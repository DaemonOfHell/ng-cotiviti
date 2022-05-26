import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck() {
    if (this.router.url == '/login') {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
}
