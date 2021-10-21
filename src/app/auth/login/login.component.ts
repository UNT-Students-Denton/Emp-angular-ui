import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAdmin:boolean=false;
loginForm=new FormGroup(
 {userName:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
 }
)
passwordHide:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(window.location.href.includes('admin')){
      this.isAdmin=true
    }else{
      this.isAdmin=false;
    }
  }
  get logInFormControls(){
    return this.loginForm.controls;
  }
  logIn(){
    console.log("Successfully Logged In");
    this.router.navigateByUrl("/app")
  }
  loginAs(type:any){
    this.router.navigateByUrl(`/${type}`);

  }
}
