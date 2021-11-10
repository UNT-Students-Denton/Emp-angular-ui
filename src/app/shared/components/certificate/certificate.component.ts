import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
@Input() data:any;
userInfo:any={};
totalScore:number=100;
actualScore:any=0;
  constructor(private authService:AuthService) {
    this.userInfo=this.authService.getUserInfo;
   }
   ngOnChanges(changes:SimpleChange){
     console.log(this.data)
     if(this.data){
      this.actualScore=(Math.round(this.data.Quiz_score/this.totalScore)*100).toString() + "%";

     }
   }

  ngOnInit(): void {
  }

}
