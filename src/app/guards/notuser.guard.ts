import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotuserGuard implements CanActivate {
private location!: Location

constructor(private router: Router) { }

  canActivate(): boolean { 
      const token = sessionStorage.getItem('token');
      if (token != null && token.trim() != '') {
        const userInfoAsString = sessionStorage.getItem('userInfo') || '{}';
        const userInfo = JSON.parse(userInfoAsString);
        if (userInfo?.roles?.includes('USER')) {
          return true;
        }
      }
      this.router.navigate(['/login']);
      return false;
    } 
}
