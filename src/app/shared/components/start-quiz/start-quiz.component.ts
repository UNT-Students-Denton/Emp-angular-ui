import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {

  }
  startQuiz(){
    this.router.navigateByUrl("app/quiz");
  }

}
