import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
@Input() card:any=[];
positionOptions:TooltipPosition[] = ['below', 'above', 'left', 'right'];
position = new FormControl(this.positionOptions[3]);
  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }
  startCourse(){
    this.router.navigateByUrl("app/view-course");
  }

}
