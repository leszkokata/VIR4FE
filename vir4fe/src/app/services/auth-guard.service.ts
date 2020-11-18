import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const username = localStorage.getItem('username');
    if(username){
      return true;
    }
    this.router.navigate(['/login', {msg: 'Unauthorized access'}]);
    return false;
  }
  
}
