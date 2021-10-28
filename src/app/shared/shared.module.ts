import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { EmpolyeeProfileComponent } from './components/empolyee-profile/empolyee-profile.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent,
    CourseCardComponent,
    ViewCourseComponent,
    EmpolyeeProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class SharedModule { }
