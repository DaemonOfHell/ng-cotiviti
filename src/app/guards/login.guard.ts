import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token != null && token.trim() != '') {
      const userInfoAsString = sessionStorage.getItem('userInfo') || '{}';
      const userInfo = JSON.parse(userInfoAsString);
      if (userInfo?.roles?.includes('ADMIN')) {
        this.router.navigate(['/dashboard/admin']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }
    return true;
  }
}
