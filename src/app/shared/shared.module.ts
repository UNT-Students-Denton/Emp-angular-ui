import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { EmpolyeeProfileComponent } from './components/empolyee-profile/empolyee-profile.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { EmployeeTransferComponent } from './components/employee-transfer/employee-transfer.component';
import { CertificateComponent } from './components/certificate/certificate.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent,
    CourseCardComponent,
    ViewCourseComponent,
    EmpolyeeProfileComponent,
    ImageSliderComponent,
    EmployeeTransferComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CertificateComponent
  ]
})
export class SharedModule { }
