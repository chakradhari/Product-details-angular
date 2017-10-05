import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class ProductActivator implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.currentUser && this.authService.currentUser.userName) {
      return true;
    } else {
      alert("Dude you need to login first");
      this.router.navigateByUrl("/login")
    }
    return false;
  }

}
