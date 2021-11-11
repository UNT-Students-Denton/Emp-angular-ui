import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions : any = [ "What is the first thing we must do as we enter the work premises?", " What is the second thing we must do as soon as we enter work premises?", " What is the third thing we must do?", " What is the fourth thing we must do?", "What is the fifth thing we must do?", "What is the sixth thing we must do?", " What is the seventh thing we must do?", " What is the eight thing we must do?", "What is the nineth thing we must do?", " What is the tenth thing we must do?"];
  choices : any = ["Clock-In","Clock-out","Talk to colleagues", " Talk to customers"];
  color: ThemePalette = "warn";
  subscriptions:Subscription[]=[];
  userInfo:any;
  constructor(private router:Router,
    private authService:AuthService,
    private sharedService:SharedService) { }

  ngOnInit(): void {
    this.userInfo=this.authService.getUserInfo();
    this.getQuestions();
  }
  submitQuiz(){
    this.router.navigateByUrl("app/view-score");
  }
  
  getQuestions(){
    let args:any={};
    args["Dept_Id"]=this.userInfo.Dept_Id;
this.subscriptions.push(this.sharedService.getQuestions(args).subscribe(res=>{
  if(res.status=='Success'){
  console.log(res);
  }
}));

  }
  ngOnDestory(){
    this.subscriptions.forEach(res=>{
      if(res){
        res.unsubscribe();
      }
    })

  }

}
