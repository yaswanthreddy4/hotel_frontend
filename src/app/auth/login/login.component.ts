import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={};
error='';
data='';


  constructor(private _authSrv: AuthService, private _router:Router) { }

  ngOnInit() {
  }
        loginUser(){
        this._authSrv.userLogin(this.loginData)
        .subscribe(
          res=>{
            console.log(res);
            if (res.auth) {
              localStorage.setItem('token', res.token);
              localStorage.setItem('role',res.role)
              this._router.navigate(['/hotels']);
            } else {
              this._router.navigate(['/login']);
            }
          },err=>{
            console.log(err);
            this.error = err.error.message;   
          }
        )
      }

  senddata(data){
        console.log(data.value);
      }
  // senddata2($event) {
  //   console.log($event);
  // }
}
