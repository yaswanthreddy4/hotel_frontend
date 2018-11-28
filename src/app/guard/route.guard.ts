import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor (private _authsrv:AuthService, private router:Router ){}
  canActivate():boolean{
    if(this._authsrv.logedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
