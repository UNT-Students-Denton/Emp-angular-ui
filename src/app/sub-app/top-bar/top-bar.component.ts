import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
@Output() sideNavToggleEvent=new EventEmitter();
isOpen:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
toggle(){
  this.sideNavToggleEvent.emit(true)
}
logout(){
  
}
showProfile(){
this.router.navigateByUrl("/app/profile");
}
}
