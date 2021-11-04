import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
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
  constructor(private router:Router,
    private authService:AuthService) { }

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
    let args={user_name:"",password:""};
    args['user_name']=this.loginForm.value.userName;
    args['password']=this.loginForm.value.password;
     this.authService.login(args).subscribe(res=>{
       if(res.status=="Success"){
         let userInfo=res.data;
         userInfo.Token=res.access_token;
         if(userInfo.is_Admin==1){
           userInfo.is_Admin=true;
         }else{
          userInfo.is_Admin=false;

         }
        localStorage.setItem("userInfo",JSON.stringify(userInfo));
         this.router.navigateByUrl("/app")
       }
     })
  }
  loginAs(type:any){
    this.router.navigateByUrl(`/${type}`);

  }
}
