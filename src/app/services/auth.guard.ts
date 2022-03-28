import { JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private api: ApiService, private router: Router){}
  canActivate(): boolean{

    if (!this.api.LoggedIn()){
      this.router.navigate(['login'])
      return false;
    }
    return this.api.LoggedIn();
  }

}
