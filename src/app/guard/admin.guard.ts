import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _authsrv:AuthService, private router:Router){}

  canActivate():boolean{
    if(this._authsrv.logedIn() && this._authsrv.getRole()=='admin'){
      return true;
    }else{
      this.router.navigate(['/login'])
    }
  }
}

