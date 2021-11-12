import { Component, EventEmitter, Inject, Injectable, OnInit, Optional, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { MatRadioChange } from '@angular/material/radio';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  [x: string]: any;
  integers = []
  jumbledQuestions:String[]=[]
  jumbledChoices: String[]=[]
  questions : any = [];
  choices : any = [];
  indexes  = [0,1,2,3,4,5,6,7,8,9];
  color: ThemePalette = "warn";
  subscriptions:Subscription[]=[];
  userInfo:any;
  correctOption: any = [];
  options: any;
  selected: any = [];
  score = 0;
  index : any;
  static score: Number;

  constructor(private router:Router,
    private authService:AuthService,
    private sharedService:SharedService) { }
  ngOnInit(): void {
    this.userInfo=this.authService.getUserInfo();
    let id = this.userInfo.User_Id;
    this.getQuestions();
  }
  sendMessage() {
    this.messageEvent.emit(''+this.score);
  }
  radioChange(event: MatRadioChange, data: { id: any; }) {
    console.log(data);
    //this.selected = event.value;
    //console.log(this.selected);
    console.log(event.value);
    var index = event.value[event.value.length-1];
    this.index = index;
    this.selected[this.index] = event.value.slice(0,-1);
  }
  submitQuiz(){
    this.router.navigateByUrl("app/view-score");
    for(var i=0;i<10; i++){
      if(this.selected[i]==this.correctOption[i]){
        this.score += 1;
      }
    }
    console.log(this.score);
    this.updateScore();
  }
  updateScore(){
    let args:any={};
    args['Quiz_score']=this.score;
    args['emp_id']= this.userInfo.User_Id
    this.subscriptions.push(this.sharedService.updateEmployee(args).subscribe(res=>{
      if(res.status=='Success'){
        console.log("Successfully updated score");
      }
    }));
  }
  getQuestions(){
    let args:any={};
    args["Dept_Id"]=this.userInfo.Dept_Id;
    this.subscriptions.push(this.sharedService.getQuestions(args).subscribe(res=>{
    if(res.status=='Success'){
    console.log(res);
    res.data.forEach((element: { [x: string]: any; }) => {
      this.questions.push(element['quiz_questions']);
      let set:any = [];
      for(var i=0;i<4;i++){
        var k = i+1;
        if(element['option'+k]!=null){
          set.push(element['option'+k]);
        }
        else{
          break;
        }
      }
      this.choices.push(set);
      this.correctOption[element.index]=element['correctOption'];
    });
    console.log(this.choices);
    console.log(this.correctOption);
    var len = this.questions.length;
    var arr = [];
    var k = 0;
    var list2 = this.correctOption;
    console.log(list2);
    for(var i =0;arr.length<10;i++){
       k = Math.floor(Math.random() * (this.questions.length-1));
       if(arr.indexOf(k)==-1){
        console.log(k);
        arr.push(k);
        this.jumbledQuestions.push(this.questions[k]);
        this.jumbledChoices.push(this.choices[k])
        this.correctOption[i]=(list2[k]);
       }
    }
    console.log(arr);
    console.log(this.jumbledQuestions);
    console.log(this.jumbledChoices);
    console.log(this.correctOption);
  }
}));
}
  ngOnDestroy(){
    this.subscriptions.forEach(res=>{
      if(res){
        res.unsubscribe();
      }
    })
  }

}
