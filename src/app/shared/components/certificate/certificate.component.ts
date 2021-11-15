import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  @Input() data: any;
  userInfo: any = {};
  totalScore: number = 100;
  actualScore: any = 0;
  subscription: Subscription[] = []
  isCertificate: boolean = false;
  constructor(private authService: AuthService,
    private sharedService: SharedService) {
    this.userInfo = this.authService.getUserInfo;
  }
  ngOnChanges(changes: SimpleChange) {
    if (this.data) {
      this.isCertificate = true;
      this.actualScore = (this.data.Quiz_score).toString() + "%";
      //(Math.round(this.data.Quiz_score/this.totalScore)*100).toString() + "%";

    }
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }
  //get employee details by employee Id
  getEmployeeDetails() {
    if (!this.data) {
      this.userInfo = this.authService.getUserInfo();
      let args = { Emp_Id: this.userInfo.User_Id };
      this.subscription.push(this.sharedService.getEmployeeDetails(args).subscribe(res => {
        if (res.status == 'Success') {
          this.isCertificate = true;
          this.data = res.data[0];
          this.actualScore = (this.data.Quiz_score).toString() + "%";
          // this.actualScore=(Math.round(this.data.Quiz_score/this.totalScore)*100).toString() + "%";

        }
      }))
    }

  }
  ngOnDestroy() {
    this.subscription.forEach(res => {
      if (res) {
        res.unsubscribe();
      }
    })
  }
}
