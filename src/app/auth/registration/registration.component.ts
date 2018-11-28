import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerData={};
  constructor(private _authSrv: AuthService, private _router: Router) { }

  ngOnInit() {
  }
registerUser(){
  console.log(this.registerData);
  this._authSrv.userRegistration(this.registerData)
  .subscribe( 
    res=>{
      console.log(res);
      if(res.auth){
        localStorage.setItem('token', res.token);
        localStorage.setItem('role',res.role);
        this._router.navigate(['/hotels']);
      } else {
        this._router.navigate(['/login']);
      }
    }, err => {
      console.log(err);
    })    
}


}
