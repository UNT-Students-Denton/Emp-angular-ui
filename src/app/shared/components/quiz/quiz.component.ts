import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions : any = [ "What is the first thing we must do as we enter the work premises?", " What is the second thing we must do as soon as we enter work premises?", " What is the third thing we must do?", " What is the fourth thing we must do?", "What is the fifth thing we must do?", "What is the sixth thing we must do?", " What is the seventh thing we must do?", " What is the eight thing we must do?", "What is the nineth thing we must do?", " What is the tenth thing we must do?"];
  choices : any = ["Clock-In","Clock-out","Talk to colleagues", " Talk to customers"];
  color: ThemePalette = "warn";
  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }
  submitQuiz(){
    this.router.navigateByUrl("app/view-score");
  }

}
