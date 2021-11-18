import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // Declare height and width variables
  scrHeight: any;
  scrWidth: any;
  sideMenus: any[] = [
    {
      iconName: "fa fa-home",
      name: "Home",
      isAdmin: false,
      url: '/home',
      isActive: false,
    },
    {
      iconName: "fa fa-file",
      name: "Take Quiz",
      isAdmin: false,
      url: '/start-quiz',
      isActive: false,
    },
    {
      iconName: "fa fa-user-circle",
      name: "Employees",
      isAdmin: true,
      isActive: false
    }
  ]
  //fetch current screen size to set side nav
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: Event) {
    this.scrHeight = window.innerHeight
      ;
    console.log(window)
    this.scrWidth = window.innerWidth;
    this.onResize();
  }
  @Input() isMenuToggle: any;
  userInfo: any = {};
  constructor(private authService: ApiService,
    private router: Router) {
      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          this.sideMenus = this.sideMenus.map(res => {
            let split_name=event.url.split("/");
            let router_name=split_name[split_name.length-1]
            if ((res.url).includes(router_name)) {
              res.isActive = true;
            }
            if (!(res.url).includes(router_name)) {
              res.isActive = false;
            }
            return res;
          });
        }
      });
    this.getScreenSize();
  }
  ngOnChanges(changes: any) {
    if (changes["isMenuToggle"]) {
    }
  }
  ngOnInit(): void {
    this.userInfo = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(this.userInfo);
    this.sideMenus = this.sideMenus.filter(res => res.isAdmin == this.userInfo.is_Admin);
    this.setUrl();
    console.log(this.router.url)
  }
  ngAfterViewInit() {
    this.onResize();
  }
  //resize functinality for side nav
  onResize() {
    let sideNavConcent = document.getElementById("side-nav-content");
    if (sideNavConcent) {
      sideNavConcent.style.height = this.scrHeight - 50 + 'px'
    }
  }
  //load defaulty screen when login the application
  loadScreen(item: any) {
    this.router.navigateByUrl(`app${item.url}`);
    this.sideMenus = this.sideMenus.map(res => {
      if (res.name == item.name) {
        res.isActive = true;
      }
      if (res.name !== item.name) {
        res.isActive = false;
      }
      return res;
    });
  }
  //set particular screen when we click the side nav
  setUrl() {
    if (this.userInfo.is_Admin) {
      this.router.navigateByUrl("app/admin");
      this.sideMenus = this.sideMenus.map(res => {
        if (res.name == "Employees") {
          res.isActive = true;
        }
        return res;
      })
    } else {
      this.sideMenus = this.sideMenus.map(res => {
        if (res.name == "Home") {
          res.isActive = true;
        }
        return res;
      });
      this.router.navigateByUrl("app/home");
    }
  }
}


