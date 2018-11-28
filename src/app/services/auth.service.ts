import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _logInUrl ='http://localhost:3030/api/user/login'
  private _registration = 'http://localhost:3030/api/user/registration'


  constructor(private http:HttpClient, private _router:Router) { }
  userRegistration(user) {
    return this.http.post<any>(this._registration,user)
  }
userLogin(user){
  return this.http.post<any>(this._logInUrl,user)
}
getToken(){
  return localStorage.getItem('token');
}
logedOut(){
  localStorage.removeItem('token');
  this._router.navigate(['/login']);
}
logedIn(){
  return !!localStorage.getItem('token')
}

getRole(){
  return localStorage.getItem('role')
}
}
