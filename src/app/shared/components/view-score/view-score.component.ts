import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RetakeDialog } from './retake-dialog/retake-dialog.component';
import { ViewCertificateDialog } from './view-certificate-dialog/view-certificate-dialog';
import { QuizComponent } from '../quiz/quiz.component';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.scss']
})

export class ViewScoreComponent implements OnInit {
  disabled: Boolean;
  score : number = 80;
  text1 = "Congratulations! you have passed the quiz";
  text2 = " You have failed the quiz. Please retake the quiz.";
  text3 = "";
  Employee:any={};
  constructor(public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private sharedService:SharedService) { }
  ngOnInit(): void {
    this.getEmployees();
  }
  openRetakeDialog() {
    if(this.score < 80){
      this.router.navigateByUrl('app/quiz');
    }
    else{
    this.dialog.open(RetakeDialog);
    }
  }
  openCertificateDialog() {
    this.dialog.open(ViewCertificateDialog);
  }
  getEmployees(){
    let args:any={};
    let userInfo:any=this.authService.getUserInfo();
    args["Emp_Id"]=userInfo.User_Id;
    this.sharedService.getEmployeeDetails(args).subscribe(res=>{
      if(res.status=="Success"){
       this.Employee=res.data;
       if(this.Employee.Quiz_score > 80){
        this.text3 = this.text1;
      }
      else{
        this.disabled=true;
        this.text3=this.text2;
      }
      }
    
    })
      }

}





