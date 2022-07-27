import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PincodeService } from './pincode.service';

@Injectable({
  providedIn: 'root'
})
export class PinGuard implements CanActivate {

  public mainpassword = [4, 5, 8, 9];
  constructor(private router: Router, private service: PincodeService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
  }
}





