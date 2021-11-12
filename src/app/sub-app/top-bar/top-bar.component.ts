import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


@Output() sideNavToggleEvent=new EventEmitter();
isOpen:boolean=false;
subscriptions:Subscription[]=[];
employee:any={};
userInfo:any={};
  constructor(private router:Router,
    private sharedService:SharedService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getEmployeeDetails(null);
  }
toggle(){
  this.sideNavToggleEvent.emit(true)
}
logout(){
  let params:any={}
  let userInfo:any=this.authService.getUserInfo();
  params["User_Id"]=userInfo.User_Id;
  this.subscriptions.push(this.sharedService.logout(params).subscribe(res=>{
    if(res.status=='Success'){
      localStorage.clear();
      this.router.navigateByUrl("/");
    }
  }))

}
showProfile(){
this.router.navigateByUrl("/app/profile");
}
ngOnDestory(){
  this.subscriptions.forEach(subscription=>{
   if(subscription){
     subscription.unsubscribe();
   }
  })
}
closeOverlay(){
  this.isOpen = !this.isOpen
}
getEmployeeDetails(id:any){
  this.userInfo=this.authService.getUserInfo();
  if(!id){
   id=this.userInfo.User_Id;
  }
  let args={Emp_Id:id};
  this.sharedService.getEmployeeDetails(args).subscribe(res=>{
    if(res.status=='Success'){
      this.employee=res.data;
    }
  })
  
}
}
