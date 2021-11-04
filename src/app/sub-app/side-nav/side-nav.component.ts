import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // Declare height and width variables
  scrHeight:any;
  scrWidth:any;
  sideMenus:any[]=[
  {
    iconName:"fa fa-home",
    name:"Home",
    isAdmin:false,
    url:'/home',
    isActive:false,
  },
  {
    iconName:"fa fa-user-circle",
    name:"Employees",
    isAdmin:true,
    isActive:false
  }
]
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?:Event) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          this.onResize();
    }
  @Input() isMenuToggle:any;
  userInfo:any={};
  constructor( private authService:ApiService,
    private router:Router) { 
    // this.authService.get('/emp',{}).subscribe(res=>{
    //   console.log(res);
    // })
    this.getScreenSize();
  }
ngOnChanges(changes:any){
if(changes["isMenuToggle"]){
}
}
  ngOnInit(): void {
     this.userInfo=localStorage.getItem("userInfo");
     this.userInfo=JSON.parse(this.userInfo);
     this.sideMenus=this.sideMenus.filter(res=>res.isAdmin==this.userInfo.is_Admin);
     this.setUrl();
  }
  ngAfterViewInit(){
  this.onResize();
  }
  onResize(){
    let sideNavConcent=document.getElementById("side-nav-content");
    if(sideNavConcent){
      sideNavConcent.style.height=this.scrHeight-52+'px'
    }
  }
  setUrl(){
    if(this.userInfo.is_Admin){
      this.router.navigateByUrl("app/admin");
      this.sideMenus=this.sideMenus.map(res=>{
        if(res.name=="Employees"){
          res.isActive=true;
        }
        return res;
      })
    }else{
     this.sideMenus=this.sideMenus.map(res=>{
       if(res.name=="Home"){
         res.isActive=true;
       }
       return res;
     });
     this.router.navigateByUrl("app/home");
    }
  }
}


