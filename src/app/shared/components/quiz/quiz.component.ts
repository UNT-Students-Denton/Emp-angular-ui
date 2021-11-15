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
  //message event to child component
  sendMessage() {
    this.messageEvent.emit(''+this.score);
  }
  //question answers setting function
  radioChange(event: MatRadioChange, data: { id: any; }) {
    console.log(data);
    //this.selected = event.value;
    //console.log(this.selected);
    console.log(event.value);
    var index = event.value[event.value.length-1];
    this.index = index;
    this.selected[this.index] = event.value.slice(0,-1);
  }
  //run when we click submit button
  submitQuiz(){
    localStorage.removeItem("Score");
    for(var i=0;i<10; i++){
      if(this.selected[i]==this.correctOption[i]){
        this.score += 1;
      }
    }
    console.log(this.score);
    this.getEmployee();
  }
  //update score when click submit button
  updateScore(){
    let args:any={};
    args['Quiz_score']=this.score*10;
    args['Emp_Id']= this.userInfo.User_Id;
    if(this.score>=8){
    args['Start_Date']=this.sharedService.addNumberOfDaysToCurrentDate(3);
    }
    this.subscriptions.push(this.sharedService.updateEmployee(args).subscribe(res=>{
      if(res.status=='Success'){
        console.log("Successfully updated score");
        this.router.navigateByUrl("app/view-score");

      }
    }));
  }
  //fetch question and answer using deparment Id
  getQuestions(){
    let args:any={};
    args["Dept_Id"]=this.userInfo.Dept_Id;
    this.correctOption=[];
    this.subscriptions.push(this.sharedService.getQuestions(args).subscribe(res=>{
    if(res.status=='Success'){
    res.data.forEach((element:any,index:number) => { 
      this.questions.push(element['quiz_questions']);
      let set:any = [];   
      for(var i=0;i<4;i++){
        var k = i+1;
        if(element['option'+k]!=null && element['option'+k]!=""){
          set.push(element['option'+k]);
        }
        else{
          break;
        }
      }
      this.choices.push(set);
      //  this.correctOption[index]=element['CorrectAns'];
    });
    var len = this.questions.length;
    var arr = [];
    var k = 0;
    var list2 = this.correctOption;
    for(var i =0;arr.length<10;i++){
      k = Math.floor(Math.random() * (this.questions.length-1));
      if(arr.indexOf(k)==-1){
       console.log(k);
       arr.push(k);
       this.jumbledQuestions.push(this.questions[k]);
       this.jumbledChoices.push(this.choices[k])
       this.correctOption.push(res.data.filter((x:any)=>x.quiz_questions==this.questions[k])[0]["CorrectAns"]);
       console.log(this.correctOption);

      }
   }
   console.log(arr);
    console.log(this.choices);
    
    console.log(list2);
    console.log(this.jumbledQuestions);
    console.log(this.jumbledChoices);
    console.log(this.correctOption);
  }
}));
}
getEmployee(){
  let args:any={};
  let userInfo:any=this.authService.getUserInfo();
  args["Emp_Id"]=userInfo.User_Id;
  this.sharedService.getEmployeeDetails(args).subscribe(res=>{
    if(res.status=="Success"){
     if(res.data[0].Quiz_score < this.score){
       this.updateScore();
    }else{
      localStorage.setItem("Score",this.score.toString());
      this.router.navigateByUrl("app/view-score");

    }
    
    }
  
  })
    }
  ngOnDestroy(){
    this.subscriptions.forEach(res=>{
      if(res){
        res.unsubscribe();
      }
    })
  }

}
