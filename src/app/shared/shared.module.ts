import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class SharedModule { }
