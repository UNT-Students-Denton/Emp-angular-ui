import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ViewCourseComponent } from '../view-course/view-course.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SwiperComponent } from 'ngx-useful-swiper';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() department_name:string;
  @Input() data:any[];
  @ViewChild('usefulSwiper', {static: false}) usefulSwiper: SwiperComponent;
  config: SwiperOptions={
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 40,
  };
  isEnd : Boolean = false;
  activeIndex:any;
  private visible = false;
  constructor(private router:Router,
    private authService:AuthService,
    private len: ViewCourseComponent) { }

  ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        this.usefulSwiper.swiper.on('reachEnd', () =>{
          this.isEnd = true;
        });
    }
    
  goToQuiz(){
    this.router.navigateByUrl("app/start-quiz");
  }

  

  

}
