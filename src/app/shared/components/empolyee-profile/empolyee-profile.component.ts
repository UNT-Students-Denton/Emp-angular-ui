import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-empolyee-profile',
  templateUrl: './empolyee-profile.component.html',
  styleUrls: ['./empolyee-profile.component.scss']
})
export class EmpolyeeProfileComponent implements OnInit {
employee:any={
  Emp_First_Name:'kousikkumar',
  Emp_Last_Name:"Vasireddy",
  gender:'Male',
  DOb:"02-29-1997",
  Emp_phone:"xxx-xxx-xxxx",
  status:'Passed',
  departMent:"Burger King",
  isActive:true,
  salary:100
}
userInfo:any={};
subscription:Subscription[]=[];
  constructor(private sharedService:SharedService,
    private route:ActivatedRoute,private authService:AuthService) {
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.getEmployeeDetails(id);
  
  }
  getEmployeeDetails(id:any){
    this.userInfo=this.authService.getUserInfo();
    if(!id){
     id=this.userInfo.User_Id;
    }
    let args={emp_id:id};
    this.subscription.push(this.sharedService.getEmployeeDetails(args).subscribe(res=>{
      if(res.status=='Success'){
        this.employee=res.data;
      }
    }))
    
  }
  print(){
    window.print();
  }
ngOnDestory(){
  this.subscription.forEach(subscription=>{
    if(subscription){
      subscription.unsubscribe();
    }
  })
}
}
