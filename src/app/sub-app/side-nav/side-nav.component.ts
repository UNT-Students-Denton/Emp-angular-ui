import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
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
  sideMenus:any[]=[{
    iconName:"fa fa-user-circle",
    name:"Example"
  }]
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?:Event) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          this.onResize();
    }
  @Input() isMenuToggle:any;
  constructor( private authService:ApiService) { 
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
}


